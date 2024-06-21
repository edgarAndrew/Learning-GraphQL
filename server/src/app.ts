import dotenv from 'dotenv'
import { connectDB } from './db/connect.js';
import { addUser } from './utils/addUser.js';
import { addCourse } from './utils/addCourse.js';
import { addLecture } from './utils/addLecture.js';
import { connectGraphQL } from './graphql/graphql.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.js';
import { notFoundMiddleware } from './middlewares/error.js';

dotenv.config({path: './.env',});

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true}));
app.use(morgan('dev')) 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// // your routes here

// app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB();
    await connectGraphQL(app)
    app.listen(port, () => console.log('Server running on port '+port+' in '+envMode+' Mode'));

    //addUser()
    //addCourse()
    //addLecture()
  } catch (error) {
    console.error(error);
  }
};

start();