
import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const findAllCourses = async (req, res) => {
      const { role, number } = req.query;
      //these 2 are moot but we may want to filter by course attributes so i can tweak here
      if (role) {
        const courses = await dao.findCoursesByRole(role);
        res.json(courses);
        return;
      }

      if (number) {
        const courses = await dao.findCoursesByPartialName(number);
        res.json(courses);
        return;
      }

      const courses = await dao.findAllCourses();
      res.json(courses);
  };

  const updateCourse = async (req, res) => {
    const { cid } = req.params;
    const status = await dao.updateCourse(cid, req.body);
    res.json(status);
  };

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.cid);
    res.json(status);
  };

  app.post("/api/courses", createCourse);

  app.get("/api/courses", findAllCourses);

  app.put("/api/courses/:cid", updateCourse);

  app.delete("/api/courses/:cid", deleteCourse);

}




// app.post("/api/courses", (req, res) => {
  //   const course = {
  //     ...req.body,
  //     _id: new Date().getTime().toString()
  //   };
  //   Database.courses.push(course);
  //   res.send(course);
  // });

  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });

  // app.put("/api/courses/:cid", (req, res) => {
  //   const { cid } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === cid ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  
  // app.delete("/api/courses/:cid", (req, res) => {
  //   const { cid } = req.params;
  //   Database.courses = Database.courses.filter((c) => c._id !== cid);
  //   res.sendStatus(204);
  // });