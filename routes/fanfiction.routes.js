import Router from 'express';
import Fanfic from './../models/fanfication.js'

const funfictionRouter = Router();
const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return `${dd}.${mm}.${yy}`;
}
funfictionRouter.post('/fanfiction', async (req, res) => {
    try {
        const { name, fandom, content, owner } = req.body;
        const lastUpdateDate = formatDate(new Date());
        const fanfic = await new Fanfic({
            name: name,
            fandom: fandom,
            lastUpdateDate: lastUpdateDate,
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
