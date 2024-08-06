// const express = require('express')
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";



const app = express();
app.use(cors());

//tell server how to handle data coming in the body. see if json is there and parse. 
app.use(express.json());

Hello(app);

CourseRoutes(app);

ModuleRoutes(app);

AssignmentRoutes(app);



Lab5(app);

app.listen(process.env.PORT || 4000)