import mongoose from 'mongoose';
export const Schema = mongoose.Schema;

const FanficSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    fandom: {
        type: String,
        required: true,
        unique: false
    },
    lastUpdateDate: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    owner:
    {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Fanfic = mongoose.model('Fanfic', FanficSchema);
export default Fanfic;