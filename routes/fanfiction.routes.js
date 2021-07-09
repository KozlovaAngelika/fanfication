import Router from 'express';
import Fanfic from './../models/fanfication.js'

const funfictionRouter = Router();

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
