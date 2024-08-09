// const express = require('express')
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import mongoose from "mongoose";
import "dotenv/config";

import UserRoutes from "./Kanbas/Users/routes.js";



const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://supersecureuser:supersecurepass@kanbas.yn7nv.mongodb.net/?retryWrites=true&w=majority&appName=Kanbas" 
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());

//tell server how to handle data coming in the body. see if json is there and parse. 
app.use(express.json());

Hello(app);

CourseRoutes(app);

ModuleRoutes(app);

AssignmentRoutes(app);

UserRoutes(app);

//add other routes? for assignments etc?

Lab5(app);

app.listen(process.env.PORT || 4000)