import express from "express";
import { config } from "dotenv";
import { userRouter } from "./router/user.router.js";
import { userDetailRouter } from "./router/user.detail.router.js";
import { DatabaseConfig } from "./config/user.config.js";


config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/user",userRouter);
app.use("/user/detail",userDetailRouter);
DatabaseConfig();





app.listen(PORT, () => {

console.log(`SERVER IS RUN ${PORT}`);

});




