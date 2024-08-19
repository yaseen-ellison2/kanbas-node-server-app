import * as dao from "./dao.js";

export default function AttemptRoutes(app) {

  const findAllAttempts = async (req, res) => {
    const { uid } = req.params;
    const attempts = await dao.findAttemptByUser(uid);
    res.json(attempts);
  };

  const createOrUpdateAttempt = async (req, res) => {
    const attempt = await dao.createOrUpdateAttempt(req.body);
    res.json(attempt);
  };

  const updateAttempt = async (req, res) => {
    const { atid } = req.params;
    const status = await dao.updateAttempt(atid, req.body);
    res.json(status);
  };

  const deleteAttempt = async (req, res) => {
    const status = await dao.deleteAttempt(req.params.atid);
    res.json(status);
  };

  app.get("/api/users/:uid/attempts", findAllAttempts);

  app.post("/api/users/:uid/attempts", createOrUpdateAttempt);

  app.put("/api/attempts/:atid", updateAttempt);

  app.delete("/api/attempts/:atid", deleteAttempt);
}
