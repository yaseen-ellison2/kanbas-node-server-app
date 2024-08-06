import db from "../Database/index.js";

export default function AssignmentRoutes(app) {

  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    res.send(newAssignment);
  });

  // no prepend here since no need to know parent
  app.delete("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== id);
    res.sendStatus(200);
  });

  app.put("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    const assignmentIndex = db.assignments.findIndex(
      (a) => a._id === id);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

}