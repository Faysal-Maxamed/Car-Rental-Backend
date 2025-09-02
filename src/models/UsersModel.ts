import { string } from "joi";
import mongoose,{Schema,Document}  from "mongoose";

export interface UserModel extends Document{
    name:String,
    email:String,
    password:String
    role:"Admin"| "User"
}

const UserSchema=new Schema<UserModel>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["user ","admin"]
    }

});

const UserTable=mongoose.model<UserModel>("UserTable",UserSchema);
export default UserTable