import { Router } from "express";
import { userCreate,userIdGet,userUpdate,usreDelete } from "../controller/user.controller.js";

export const userRouter = Router();



userRouter.post("/create",userCreate);
userRouter.get("/get",userIdGet);
userRouter.put("/update",userUpdate);
userRouter.delete("/delete",usreDelete);