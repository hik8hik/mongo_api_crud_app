const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //ONLINE MONGO DB STR
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false, //not supported
      //useCreateIndex: true, //not supported
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
