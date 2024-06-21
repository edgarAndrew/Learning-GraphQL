import { Lecture } from '../models/Lecture.js';

const yolo = async (lectureData:any) => {
    const lecture = new Lecture(lectureData);
    await lecture.save();
    console.log('Lecture added successfully');
};


const newLecture = {
    title: 'Kafka: The Definitive Guide Lecture 1',
    description: 'A comprehensive guide to Kafka',
    position: 1, // within section
    resources: [
        {
            title: 'Official Kafka Documentation',
            url: 'https://kafka.apache.org/documentation/',
        },
    ],
    videoUrl: {
        _480p: 'http://example.com/video_480p.mp4',
        _720p: 'http://example.com/video_720p.mp4',
        _1080p: 'http://example.com/video_1080p.mp4',
    },
    duration: 30,
    course: '6672a7967d17de8804f0c89a', // ObjectId of the course
    isPublished: true,
    isPreview: false,
};

export const addLecture = () =>{
    yolo(newLecture)
}