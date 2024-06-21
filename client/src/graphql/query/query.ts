import { gql } from "@apollo/client"
export const getUsers = gql(`
    query Query {
        users{
            _id
            name
            age
        }
    }
`)

export const addUsers = gql(`
    mutation Mutation($name: String!, $age: Int!, $email: String!, $password: String!) {
        addUser(name: $name, age: $age, email: $email, password: $password)
    }
`)