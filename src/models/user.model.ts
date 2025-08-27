import mongoose from "mongoose";
import { UserTypes } from "../interface/util/userTypes.enum";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, enum: Object.values(UserTypes), required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},
{
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;
