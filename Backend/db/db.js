import mongoose from 'mongoose'

const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection successful")
    } catch (error) {
        console.log('Error connnecting database')
        process.exit(1);
    }
}

export default connectDb