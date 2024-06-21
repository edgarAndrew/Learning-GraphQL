import { getAllUsers, getUser } from '../../controllers/user.js';
import { getAllCourses, getAllLectures, getCourse, getCoursesOfUser } from '../../controllers/course.js';
import { Lecture } from '../../models/Lecture.js';
import { createUser } from '../../controllers/user.js';
import { CourseType } from '../../models/Course.js';
import { LectureType } from '../../models/Lecture.js';

export const graphQLResolver = {
    // Query is the root parent, reserved keyword, deals with queries and fetching data
    Query:{
      users:getAllUsers,
      courses:getAllCourses,
      course:getCourse,
      lectures:getAllLectures
    },

    // Course is a parent and can be used inside other parents
    Course:{
      // this will execute when instructor(child) is queried within course (parent)
      instructor:async(parent:CourseType,args:{})=> await getUser(parent.instructor)
    },

    // Now say you to change some field names in your schema dont match the field names in db
    // eg. videoUrl has field low quality in graphql schema but has field 480p in db
    // therefore we write logic to handle cases where parent is lecture and child is videoUrl
    Lecture:{
      videoUrl:(parent:LectureType,args:{})=>{
        // parent will be lecture
        return {
          low_quality:parent.videoUrl?._480p,
          medium_quality:parent.videoUrl?._720p,
          high_quality:parent.videoUrl?._1080p
        }
      }
    },

    // exercise: how will you get all courses created by user?
    // Sol. there is no condition that the graphql schema and db schema should be same
    // step1 - add a field 'courses' in user graphql schema which will be array of courses
    // step2 - add a resolver to handle case where parent is user and child is courses
    User:{
      courses:getCoursesOfUser
    },

    // In GraphQL, mutations are operations that allow you to modify server-side data. 
    // They are similar to the POST, PUT, PATCH, and DELETE HTTP methods in RESTful APIs

    // Like schema for query, mutation also needs a schema
    
    // resolver for mutation
    Mutation:{
      addUser:createUser // schema for addUser is specified in schema.ts (typeDefs) and arguments are passed to controller 
    }
  }