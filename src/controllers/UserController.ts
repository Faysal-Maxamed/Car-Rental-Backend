import express from "express";
import type { Request, Response } from "express"; 
import User from "../models/UsersModel.ts"
import {userSchema} from "../validators/UserValidators.ts"


export  const CreateUser=async(req:Request,res:Response)=>{
    try {
        const {error,value}=userSchema.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0]?.message})
        }
        const existingUser =await User.findOne({email:value.email});

        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const user =await User.create(value);
        res.status(201).json({messgae:"Succsessfully registered User","UserData":user})
    } catch (error) {
        res.status(400).json({messgae:"Error creating user"})
    }
}


export const Login=async(req:Request,res:Response)=>{
    try {
        const {email,password}=req.body;
        const useremail= await User.findOne({email});
        const userpassword= await User.findOne({password});
        if(!useremail){
            return res.status(400).json({messgae:"Invalid Credentials email"})
        } else if(!userpassword){
            return res.status(400).json({messgae:"Invalid Credentials password"})
        }
        res.status(200).json({messgae:"Login Successfull",})
    } catch (error) {
        
    }
}


export const GetAllUsers=async(req:Request,res:Response)=>{
    try {
        const Users=await User.find();
        if(Users.length===0){
            return res.status(400).json({messgae:"No Users found"})
        }
        res.status(200).json({messgae:"All Users",Users})
    } catch (error) {
        
    }   
}

export const deleteUser=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(400).json({messgae:"User id is required"})
        }
        const deleteUser= await User.findByIdAndDelete({_id:id});
        if(!deleteUser){
            return res.status(400).json({messgae:"No User found"})
        }
        res.status(200).json({messgae:"User deleted successfully",deleteUser})
    } catch (error) {
        
    }
}


export const UpdateUser=async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(400).json({messgae:"User id is required"})
        }
        const updateuser=await User.findByIdAndUpdate({_id:id},req.body,{new:true});
        if(!updateuser){
            return res.status(400).json({messgae:"No User found"})
        }
        res.status(200).json({messgae:"User updated successfully",updateuser})
    } catch (error) {
        
    }
}
