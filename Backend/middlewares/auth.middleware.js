import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import BlackListToken from "../models/blacklistToken.model.js";


const authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const isBlackListed = await BlackListToken.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message: "Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}

export default authUser