import mongoose from "mongoose";

export type CourseType = {
    title: string;
    description: string;
    instructor: string; // Assuming you'll store the ObjectId as a string
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    category: string;
    subCategory: string;
    level: string;
    language: string;
    whatYouWillLearn: string[];
    requirements: string[];
    isPublished: boolean;
    isFree: boolean;
    isApproved: boolean;
    isTrending: boolean;
    isPopular: boolean;
    students: string[]; // Assuming you'll store the ObjectId as a string
    createdAt: Date;
    updatedAt: Date;
};

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Types.ObjectId,ref: 'User',required: true },
    ratingsAverage: { type: Number, required: true },
    ratingsQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    level: { type: String, required: true },
    language: { type: String, required: true },
    whatYouWillLearn: { type: [String], required: true },
    requirements: { type: [String], required: true },
    isPublished: { type: Boolean, default: false },
    isFree: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    students: { type: [mongoose.Types.ObjectId], default: [] },
},{timestamps:true})

export const Course = mongoose.model<CourseType>("Course",schema)