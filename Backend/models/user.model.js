import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type: String,
            required: true,
            minLength: [3,'First name must have at least 3 characters long'],
        },
        lastName:{
            type: String,
            minLength: [3,'Last name must have at least 3 characters long'],
        }
    },
    email:{
        type:String,
        required: true,
        minLength:[5,'Email must be at least 5 characters long'],
        unique: true
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type: String,
    },
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const User = mongoose.model('User',userSchema)

export default User