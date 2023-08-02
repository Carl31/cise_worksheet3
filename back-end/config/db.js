// db.js

const mongoose = require("mongoose");
const config = require("config");
//const db = config.get("mongoURI");
const db = "mongodb+srv://carl31:cise_2023@cluster0.fuvrr2z.mongodb.net/";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
