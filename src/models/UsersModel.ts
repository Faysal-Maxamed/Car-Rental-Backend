import mongoose,{Schema,Document}  from "mongoose";

export interface UserModel extends Document{
    name:String,
    email:String,
    password:String
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
    }
});

const UserTable=mongoose.model<UserModel>("UserTable",UserSchema);
export default UserTable