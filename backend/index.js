const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://vivek4321:vwJTN0P10P98xja8@cluster0.g5gh6fd.mongodb.net/Courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
