import User from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
import BlackListToken from "../models/blacklistToken.model.js";
export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;
  const hashPassword = await User.hashPassword(password);
  const user = await createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
  })
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

export const loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email,password } = req.body;
    const user = await User.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:"Invalid email or password"})
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const token = user.generateAuthToken()

    res.cookie('token',token);
    res.status(201).json({token,user:{
        ...user._doc,password:undefined
    }});
}
export const getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}

export const logoutUser = async(req,res,next)=>{
  res.clearCookie('token')
  const token = req.cookies.token || req.headers.authorization.split(' ')[1]
  await BlackListToken.create({token})
  res.status(200).json({message: 'Logged Out'})
}