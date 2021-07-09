import Router from 'express';
import Fanfic from './../models/fanfication.js';
import User from './../models/user.js';
import jwt from "jsonwebtoken";
import config from "config";

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

funfictionRouter.post('/fanfiction', async (req, res) => {
    try {
        const { name, fandom, shortDescription, content, owner } = req.body;
        const lastUpdateDate = new Date();
        const fanfic = await new Fanfic({
            name: name,
            fandom: fandom,
            lastUpdateDate: lastUpdateDate,
            shortDescription: shortDescription,
            content: content,
            owner: owner
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
    try {
        const fanfiction = await Fanfic.find();
        return res.json(fanfiction)
    } catch (error) {
        res.status(500).json({
            message: 'Error. Try again'
        })
    }
})
export default funfictionRouter;
