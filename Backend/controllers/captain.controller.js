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