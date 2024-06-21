import { User } from "../models/User.js";

const yolo = async (userData:any) => {
    const user = new User(userData);
    await user.save();
    console.log('User added successfully');
};
  
const newUser = {
    name: 'Colin Bird',
    age: 18,
    email: 'colinbird@example.com',
    password: 'securepassword'
};

export const addUser = ()=>{
    yolo(newUser);
}