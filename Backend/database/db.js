import mongoose from "mongoose"
mongoose.set(`strictQuery` , true)

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB