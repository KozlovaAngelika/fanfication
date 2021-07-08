import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import authRouter from './routes/auth.routes.js'
import fanfictionRouter from './routes/fanfiction.routes.js'

const app = express();
const PORT = config.get('port') || 5000;
app.use(express.json({
    extended: true
}));
app.use('/api/auth', authRouter);
app.use('/api/funfic', fanfictionRouter);


async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            })
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    }
    catch (err) {
        console.error(err)
    }
}
start();