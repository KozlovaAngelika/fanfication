import Router from 'express';
import User from './../models/user.js'
const router = Router();

router.post('/registration', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isUsed = await User.findOne({
            email
        });
        if (isUsed) {
            return res.status(400).json({
                message: 'Such user already exists'
            })
        }
        const user = new User({
            name, email, password
        })
        await user.save(user);
        res.status(201).json({
            message: 'User created'
        })
    } catch (error) {
        console.error(error);
    }
})
export default router;