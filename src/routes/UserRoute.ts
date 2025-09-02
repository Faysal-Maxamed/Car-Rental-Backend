import express from "express";
import { CreateUser } from "../controllers/UserController.ts";

const UserRouter = express.Router();

UserRouter.post("/create-user", CreateUser);

export default UserRouter;
