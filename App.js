// const express = require('express')

import "dotenv/config";
import express from "express";
import session from "express-session";

import Hello from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import mongoose from "mongoose";


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas" 
mongoose.connect(CONNECTION_STRING);



const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.NETLIFY_URL || "http://localhost:3000",
})
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));




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