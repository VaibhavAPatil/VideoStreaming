// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

const app = express();

connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`⚙️  Server Is Running at port: ${process.env.PORT}`);
    console.log(`🔗 http://localhost:${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("⚠️ MONGO DB Connection failed !!!", err);
})



// OLD Code
/*
// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server Is Running at port: ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("⚠️ MONGO DB Connection failed !!!", err);
})


import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("Error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App Is Listning on Port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();
*/

