import { Course } from "../models/Course.js";

const newCourse = {
    title: 'Kafka: The Definitive Guide',
    description: 'A comprehensive guide to Kafka',
    instructor: '66729dff0bee886d6aa84193',
    ratingsAverage: 4.2,
    ratingsQuantity: 150,
    price: 599,
    category: 'Programming',
    subCategory: 'Backend Development',
    level: 'Intermediate',
    language: 'English',
    whatYouWillLearn: ['Kafka', 'Kafka Streams', 'Kafka Connect'],
    requirements: ['Java','Functional Programming'],
    isPublished: true,
    isApproved: true,
};

const yolo = async (courseData:any) => {
    const course = new Course(courseData);
    await course.save();
    console.log('Course added successfully');
};

export const addCourse = () =>{
    yolo(newCourse);
}