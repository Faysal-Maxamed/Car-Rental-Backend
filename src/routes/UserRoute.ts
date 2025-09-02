import express from "express";
import { CreateUser,Login } from "../controllers/UserController.ts";

const UserRouter = express.Router();

UserRouter.post("/create-user", CreateUser);
UserRouter.post("/login", Login);

export default UserRouter;
