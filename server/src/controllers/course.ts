import { Course, CourseType } from "../models/Course.js";
import { Lecture } from "../models/Lecture.js";
import { UserType } from "../models/User.js";

export const getAllCourses = async()=>{
    const courses = await Course.find();
    return courses;
}

// parent and arg are passed from graphql typeDef schema via resolver
export const getCourse = async(parent:CourseType,arg:{id:string})=>{
    const course = await Course.findById(arg.id);
    return course
}

export const getAllLectures = async()=>{
    const lectures = await Lecture.find();
    return lectures
}

export const getCoursesOfUser = async(parent:UserType)=>{
    const courses = await Course.find({instructor:parent._id});
    return courses
}