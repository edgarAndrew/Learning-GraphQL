import mongoose from "mongoose";

export type UserType = {
    _id: string;
    name: string;
    age: number;
    email: string;
    password: string;
    googleId?: string; // Optional field
    role?: "user" | "admin"; // Optional field with default value
    avatar?: string; // Optional field
    verified?: boolean;
    createdAt: Date;
    updatedAt: Date;
};

const schema = new mongoose.Schema(
    {
        name:{ type:String,required:true},
        age:{ type:Number,required:true},
        email:{ type:String,required:true},
        password:{ type:String,required:true},
        googleId:{ type:String,default:""},
        role:{ type:String,default:"user"},
        avatar:{ type:String,default:""},
        verified:{ type:Boolean,default:false},
    },{timestamps:true}
)
export const User = mongoose.model<UserType>("User",schema)