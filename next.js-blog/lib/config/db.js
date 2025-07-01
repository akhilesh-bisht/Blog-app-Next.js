import mongoose from "mongoose";

const connectDB = async () => {


    try {
        await mongoose.connect('mongodb+srv://akhileshbisht2020:P08pzhFZw7Th9GgN@cluster0.c9tekgl.mongodb.net', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); 
        
    }
    
}

export default connectDB;