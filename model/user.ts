const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    password: String,
    email: String,
    score: Number,
    displayName: String,
    whereYouFindUs: String,
});


export const User = mongoose.model('user', UserSchema);
