import joi from "joi";

export const userSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
    role:joi.string().valid("Admin","User").required()
})