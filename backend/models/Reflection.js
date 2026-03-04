import mongoose from "mongoose";

const reflectionSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    goodThing: {
        type: String
    },

    stress: {
        type: String
    },

    smallWin: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

export default mongoose.model("Reflection", reflectionSchema);