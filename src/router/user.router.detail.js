import { Router } from "express";
import { userCreateDetail } from "../controller/user.controller.detail.js";


export const userRouterDetail = Router();

userRouterDetail.post("/createDetail",userCreateDetail);
