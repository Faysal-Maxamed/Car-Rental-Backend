import express from "express";
import { CreateUser,Login ,GetAllUsers} from "../controllers/UserController.ts";

const UserRouter = express.Router();

UserRouter.post("/create-user", CreateUser);
UserRouter.post("/login", Login);
UserRouter.get("/all-users", GetAllUsers);

export default UserRouter;
