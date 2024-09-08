const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB")

dotenv.config();
connectDb();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const PORT = 8080 || process.env.PORT;

app.get("/",(req,res) => {
    res.send("Api is Working");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
