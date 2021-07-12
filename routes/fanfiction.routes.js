import Router from 'express';
import Fanfic from './../models/fanfication.js';
import User from './../models/user.js';
import jwt from "jsonwebtoken";
import config from "config";
import mongoose from 'mongoose';

const funfictionRouter = Router();

const publicAddresses = new Map([
    ['/fanfiction', 'GET']
]);

funfictionRouter.all(
    '/*', [], async (req, res, next) => {
        if (publicAddresses.has(req.url) && publicAddresses.get(req.url) === req.method) {
            next();
        } else {
            if (await isAuthorized(req)) {
                next();
            } else {
                return res.status(401).json({
                    message: 'User is not authorized'
                });
            }
        }
    }
)

const isAuthorized = async (req) => {
    if (req.headers.authorization) {
        const userData = JSON.parse(req.headers.authorization);

        const decoded = jwt.verify(
            userData.token,
            config.get("jwtSecret")
        )
        if (decoded && userData.id === decoded.userId) {
            const user = await User.findById(userData.id).exec();
            return !!user;
        }
    }
    return false;
}

funfictionRouter.put('/fanfiction', async (req, res) => {
    try {
        const { name, fandom, shortDescription, content } = req.body;
        const lastUpdateDate = new Date();
        const fanfic = await new Fanfic({
            name: name,
            fandom: fandom,
            lastUpdateDate: lastUpdateDate,
            shortDescription: shortDescription,
            content: content,
            owner: JSON.parse(req.headers.authorization).id
        })
        await fanfic.save();
        res.status(200).json(
            {
                message: 'Fanfic created'
            }
        )
    } catch (error) {
        console.error(error)
    }
})

funfictionRouter.get('/fanfiction', async (req, res) => {
    const userId = req.query.userId;
    try {
        let fanfication = null;
        const lookup = {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "owner"
            }
        };
        if (userId) {
            fanfication = await Fanfic.aggregate([
                { $match: { owner: mongoose.Types.ObjectId(userId) } },
                lookup]);
        } else {
            fanfication = await Fanfic.aggregate([
                lookup]);
        }
        const fanficationWithOwnerName = fanfication.map(elem => {
            const owner = elem.owner;
            elem.owner = null;
            if (owner && owner.length != 0) {
                elem.owner = owner[0].name;
            }
            return elem;
        });
        return res.json(fanficationWithOwnerName)
    } catch (error) {
        res.status(500).json({
            message: 'Error. Try again'
        })
        console.error(error);
    }
})

funfictionRouter.delete('/fanfiction', async (req, res) => {
    const result = await Fanfic.deleteOne({ _id: mongoose.Types.ObjectId(req.body.id) });
    if (result.deletedCount != 0) {
        return res.status(200).json({
            message: 'ok'
        });
    } else {
        return res.status(500).json({
            message: 'Error. Try again'
        })
    }
})
export default funfictionRouter;
