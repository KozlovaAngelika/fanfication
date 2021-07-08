import Router from 'express';
import Fanfic from './../models/fanfication.js'

const funfictionRouter = Router();
const formatDate = (date) => {
    const dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    const mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    const yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return `${dd}.${mm}.${yy}`;
}
funfictionRouter.post('/add', async (req, res) => {
    try {
        const { name, fandom, content, userId } = req.body;
        const lastUpdateDay = formatDate(new Date());
        const fanfic = await new Fanfic({
            name: name,
            fandom: fandom,
            lastUpdateDate: lastUpdateDate,
            content: content,
            owner: userId
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
export default funfictionRouter;
