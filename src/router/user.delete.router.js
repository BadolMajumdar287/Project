import { Router } from "express";
import { userDelete } from "../controller/user.delete.controller.js";


export const userDeleteRouter = Router();



userDeleteRouter.delete("/delete/:_id",userDelete)