import express from "express";
import type { Request, Response } from "express"; 
import User from "../models/UsersModel.ts"

export  const CreateUser=async(req:Request,res:Response)=>{
    try {
        const user =await User.create(req.body);
        res.status(201).json({messgae:"Succsessfully registered User","UserData":user})
    } catch (error) {
        res.status(400).json({messgae:"Error creating user"})
    }
}