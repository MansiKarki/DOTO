const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB...");

        // Clear existing test users if any to avoid unique email error
        await User.deleteMany({ email: { $in: ["handesanika50@gmail.com", "mansikarki@gmail.com"] } });

        const salt = await bcrypt.genSalt(10);
        
        const users = [
            {
                name: "Sanika Hande",
                email: "handesanika50@gmail.com",
                password: await bcrypt.hash("0102", salt),
                role: "member"
            },
            {
                name: "Mansi Karki",
                email: "mansikarki05@gmail.com",
                password: await bcrypt.hash("123456", salt),
                role: "leader"
            }
        ];

        await User.insertMany(users);
        console.log("Success: Allocated users (Sanika and Mansi) have been created in the database!");
        process.exit();
    } catch (error) {
        console.error("Error seeding users:", error);
        process.exit(1);
    }
};

seedUsers();
