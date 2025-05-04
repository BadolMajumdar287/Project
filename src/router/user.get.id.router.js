
import { Router } from "express";
import { userGetById } from "../controller/user.get.id.controller.js";

export const userGetByIdRouter = Router();

userGetByIdRouter.get("/userGet/:name",userGetById);
