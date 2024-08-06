import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
export default function Lab5(app) {

  app.get('/lab5/welcome', (req, res) => {
    res.send("Welcome to Lab 5!!!!");
  });

PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);

};




//do nodemon App.js

//from Class Below
// app.get("/lab5/add/:a/:b", (req, res) => {
//   const a = parseInt(req.params.a);
//   const b = parseInt(req.params.b);
//   const sum = a + b
//   res.send(sum.toString());});

// app.get("/lab5/subtract/:a/:b", (req, res) => {
//   const a = parseInt(req.params.a);
//   const b = parseInt(req.params.b);
//   const sum = a - b
//   res.send(sum.toString());});