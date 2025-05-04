import { Router } from "express";
import { userUpdate } from "../controller/user.update.controller.js";

export const userUpdateRouter = Router();


userUpdateRouter.put("/update/:_id",userUpdate);


