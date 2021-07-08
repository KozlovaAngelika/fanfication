import mongoose from 'mongoose';
export const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fanfiction: [{ type: mongoose.Types.ObjectId, ref: 'Fanfic' }]
});

const User = mongoose.model('User', UserSchema);
export default User;