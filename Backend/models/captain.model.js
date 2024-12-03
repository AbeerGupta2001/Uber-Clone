import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required:true,
            minLength: [3,'Firstname must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minLength:[3,'Last name must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required: true,
        select: false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:"inactive"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3,"Color must at least 3 characters long"]
        },
        plate:{
            type:String,
            required:true,
            minLength:[3,"Plate must be al least 3 characters long"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1']
        },
        vehicleType:{
            type: String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        long:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const Captain = mongoose.model('Captain',captainSchema)
export default Captain
