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