import express, { NextFunction } from 'express';
import { Request, Response } from 'express';

export const graphqlAuthMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const key = 'Ronaldo is the GOAT'
    if(key === 'Ronaldo is the GOAT'){
        next()
    }
    else
        res.send("RONALDO is the GOAT!").sendStatus(401)
};