import { Router } from "express";
import { userDetailCreate } from "../controller/user.detail.controller.js";


export const userDetailRouter = Router();


userDetailRouter.post("/create/detail",userDetailCreate);