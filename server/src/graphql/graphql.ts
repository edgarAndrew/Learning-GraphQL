import { ApolloServer } from '@apollo/server';
import { graphQLSchema } from './schema/schema.js';
import {graphQLResolver} from './resolvers/resolvers.js'
import {Express} from 'express'
import {expressMiddleware} from '@apollo/server/express4'
import express from 'express';
import { notFoundMiddleware } from '../middlewares/error.js';


// typeDefs is where we specify schemas
// resolvers is where we specify how to resolve queries, eg.fetching data from a database
// context can be used in graphql for authentication and authorization, and later be used in resolvers.

export const connectGraphQL = async(app:Express) =>{
    const server = new ApolloServer({
        typeDefs:graphQLSchema,
        resolvers:graphQLResolver
    })

    await server.start();
    
    app.use(express.json());
    
    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => {
            const token = req.headers.authorization || 'cr7';
            // Here, you can verify the token and extract user information
            return { token,/* user */};

            // Check context usage in createUser resolver
        },
    }));
    
    app.use(notFoundMiddleware);
    console.log(`🚀 Apollo Server ready at /graphql`);
}

export interface MyContext {
    token: string;
    // Add any other fields you want to include in the context
    // user?: User;
}