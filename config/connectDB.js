const mongoose = require("mongoose");
const colors = require('colors')

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected`);
        
    } catch (error) {
        console.log(`${error}`.bgRed);
        
    }
}

module.exports = connectDb