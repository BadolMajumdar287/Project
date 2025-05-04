import express from "express";
import { config } from "dotenv";
import { userRouter } from "./router/user.router.js";
import { userRouterDetail } from "./router/user.router.detail.js";
import { userGetByIdRouter } from "./router/user.get.id.router.js";
import { userUpdateRouter } from "./router/user.update.router.js";
import { userDeleteRouter } from "./router/user.delete.router.js";
import { DatabaseConfig } from "./config/user.config.js";


config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/user",userRouter);
app.use("/userDetail",userRouterDetail);
app.use("/userGet",userGetByIdRouter);
app.use("/userUpdate",userUpdateRouter);
app.use("/userDelete",userDeleteRouter);
DatabaseConfig();





app.listen(PORT, () => {

console.log(`SERVER IS RUN ${PORT}`);

});




