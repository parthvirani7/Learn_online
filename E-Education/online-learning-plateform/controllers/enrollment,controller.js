const enrollmentService = require("../services/enrollment.service");

const enrollUser = async (req, res) => {
  const enrollment = await enrollmentService.enrollUser(req.body);
  res.status(201).json({ message: "User enrolled successfully", data: enrollment });
};

const completeLesson = async (req, res) => {
  const enrollment = await enrollmentService.completeLesson(req.params.enrollmentId, req.params.lessonId);
  res.status(200).json({ message: "Lesson marked as complete", data: enrollment });
};

module.exports = {
  enrollUser,
  completeLesson,
};
