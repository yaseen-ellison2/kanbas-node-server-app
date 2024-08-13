// import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {


  const findAllModules = async (req, res) => {
    const { cid } = req.params;
    //these 2 are moot but we may want to filter by course attributes so i can tweak here
      const modules = await dao.findModulesByCourse(cid);
      res.json(modules);
  };


  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };
  
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  app.get("/api/courses/:cid/modules", findAllModules);

  app.post("/api/courses/:cid/modules", createModule);

  app.put("/api/modules/:mid", updateModule);

  app.delete("/api/modules/:mid", deleteModule);

// may need to go back and call cid's for first 2.
// FIND
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules.filter((m) => m.course === cid);
  //   res.json(modules);
  // });

  // CREATE
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });

  // UPDATE
  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });

  // DELETE
  // // no prepend here since no need to know parent
  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });





}
