import { Router } from "express";
import { userCreate} from "../controller/user.controller.js";
import { userGetById } from "../controller/user.controller.js";

export const userRouter = Router();



userRouter.post("/create",userCreate);
userRouter.get("/get/:name",userGetById);