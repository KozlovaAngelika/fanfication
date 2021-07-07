import Router from 'express';
import User from './../models/user.js'
import { check, validationResult } from 'express-validator'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import config from 'config';

const router = Router();

router.post('/registration', [
    check('email', 'email isn`t correct').normalizeEmail({ "gmail_remove_dots": false }).isEmail(),
    check('password', 'Password is too short').isLength({
        min: 1
    })
],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Data is incorrect'
                })
            }
            const { name, email, password } = req.body;
            const isUsed = await User.findOne({
                email
            });
            if (isUsed) {
                return res.status(400).json({
                    message: 'Such user already exists'
                })
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            })
            await user.save(user);
            res.status(201).json({
                message: 'User created'
            })
        } catch (error) {
            console.error(error);
        }
    })
router.post('/login', [
    check('email', 'email isn`t correct').normalizeEmail({ "gmail_remove_dots": false }).isEmail(),
    check('password', 'Enter your password').exists()
],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Data is incorrect'
                })
            }
            const { email, password } = req.body;
            const user = await User.findOne({
                email
            })
            if (!user) {
                return res.status(400).json({
                    message: 'User with this email is not registered'
                })
            }
            const isMatch = bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Invalid password. Try again.'
                })
            }
            const token = jwt.sign({
                userId: user.id
            }, config.get("jwtSecret"))
            res.status(200).json({
                id: user._id,
                token: token,
                name: user.name
            })
        } catch (error) {
            console.error(error);
        }
    })
export default router;