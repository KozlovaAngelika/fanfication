import express from 'express';
import mongoose from 'mongoose';
import config from "config";

const app = express();
const PORT = config.get('port') || 5000;

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