import BlackListToken from "../models/blacklistToken.model.js";
import Captain from "../models/captain.model.js";
import createCaptain from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }   
    const {fullname,email,password,vehicle} = req.body

    const isCaptainAlreadyExist = await Captain.findOne({email});

    if(isCaptainAlreadyExist) {
        return res.status(400).json({message:"Captain already exists"})
    }

    const hashPassword = await Captain.hashPassword(password)

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })

    const token = captain.generateAuthToken()

    res.status(201).json({token,captain})
}

export const loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body

    const captain = await Captain.findOne({email}).select('+password')
    
    if(!captain){
        return res.status(401).json({message:"Invalid email or password"})
    }
    
    const isMatch = await captain.comparePassword(password)

    if(!isMatch) {
        return res.status(401).json({message: "Invalid email or password"})
    }

    const token = captain.generateAuthToken()
    res.cookie('token',token)
    res.status(200).json({token,captain:{
        ...captain._doc,password:undefined
    }})
}

export const getCaptainProfile = async(req,res,next)=>{
    res.status(200).json({captain:req.captain})
}

export const logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await BlackListToken.create({token});



    res.clearCookie('token');
    res.status(200).json({message:'Logout successfully'});
}