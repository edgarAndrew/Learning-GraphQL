import { MyContext } from "../graphql/graphql.js";
import { User } from "../models/User.js";

export const getAllUsers = async()=>{
    const users = await User.find();
    return users;
}

export const getUser = async(id:string)=>{
    const user = await User.findById(id);
    return user
}

export const createUser = async(parent:any
    ,arg:{name:string,age:number,email:string,password:string}
    ,context:MyContext)=>{
        const {token} = context

        if(token === 'cr7'){
            const {name,age,email,password} = arg
            const user = new User({name,age,email,password});
            await user.save();
            return "user added successfully"
        }else{
            return "unauthorized"
        }
}