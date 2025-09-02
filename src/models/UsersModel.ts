import mongoose,{Schema,Document}  from "mongoose";

export interface UserModel extends Document{
    name:String,
    email:String,
    age:String
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
    age:{
        type:String,
        required:true
    }
});

const UserTable=mongoose.model<UserModel>("UserTable",UserSchema);
export default UserTable