import * as dao from "./dao.js";

export default function QuizRoutes(app) {


  const findAllQuizzes = async (req, res) => {
    const { cid } = req.params;
    //these 2 are moot but we may want to filter by course attributes so i can tweak here
    const quizzes = await dao.findQuizzesByCourse(cid);
    res.json(quizzes);
  };


  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.qid);
    res.json(status);
  };

  app.get("/api/courses/:cid/quizzes", findAllQuizzes);

  app.post("/api/courses/:cid/quizzes", createQuiz);

  app.put("/api/quizzes/:qid", updateQuiz);

  app.delete("/api/quizzes/:qid", deleteQuiz);
}