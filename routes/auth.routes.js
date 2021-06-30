import Router from 'express';
import User from './../models/user'
export const router = Router;

router.post('registration', async (req, res) => {
    try {
        const { email, passwors } = req.body;
        const isUsed = await User.findOne({
            email
        });
        if (isUsed) {
            return res.status(400).json({
                message: 'Such user already exists'
            })
        }
        const user = new User({
            email, password
        })
        await user.save(user);
        res.status(201).json({
            message: 'User created'
        })
    } catch (error) {
        console.error(error);
    }
})
