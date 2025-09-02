import mongoose from "mongoose";


const ConnectedDb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://khaledhussein957:khaledhussein957@cluster0.tzftxgy.mongodb.net/whatsapp_clone?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("db connected succsesfully"))
    } catch (error) {
        console.log("error ocuur :"+ error)
    }
}

export default ConnectedDb