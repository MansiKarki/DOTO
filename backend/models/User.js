import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["student", "leader", "founder"] },
    workHours: String
});

const User = mongoose.model("User", userSchema);
export default User;
