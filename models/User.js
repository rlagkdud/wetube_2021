import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl:String,
    facebookId:Number,
    githubId:Number
});
const model = mongoose.model("User",UserScheme);

export default model;