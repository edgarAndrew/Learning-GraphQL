import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!,{
            dbName: "Learn_GraphQl_API",
        });
        console.log(`Connected to MongoDB, Database name :${conn.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};