import express from "express";
import { CreateUser,Login ,GetAllUsers,deleteUser,UpdateUser} from "../controllers/UserController.ts";

const UserRouter = express.Router();

UserRouter.post("/create-user", CreateUser);
UserRouter.post("/login", Login);
UserRouter.get("/all-users", GetAllUsers);
UserRouter.delete("/delete-user/:id", deleteUser);
UserRouter.put("/update-user/:id", UpdateUser);

export default UserRouter;
