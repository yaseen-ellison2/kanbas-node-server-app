import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {


  const findAllEnrollments = async (req, res) => {
    const { uid } = req.params;
    //these 2 are moot but we may want to filter by course attributes so i can tweak here
    const enrollments = await dao.findEnrollmentByUser(uid);
    res.json(enrollments);
  };


  const createEnrollment = async (req, res) => {
    const enrollment = await dao.createEnrollment(req.body);
    res.json(enrollment);
  };

  const updateEnrollment = async (req, res) => {
    const { eid } = req.params;
    const status = await dao.updateEnrollment(eid, req.body);
    res.json(status);
  };

  const deleteEnrollment = async (req, res) => {
    const status = await dao.deleteEnrollment(req.params.eid);
    res.json(status);
  };

  app.get("/api/users/:uid/enrollments", findAllEnrollments);

  app.post("/api/users/:uid/enrollments", createEnrollment);

  app.put("/api/enrollments/:eid", updateEnrollment);

  app.delete("/api/enrollments/:eid", deleteEnrollment);

}