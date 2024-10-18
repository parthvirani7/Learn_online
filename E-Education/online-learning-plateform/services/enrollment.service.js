const { enrollmentSchema } = require("../models/Enrollment.model");

const enrollUser = async (data) => {
  return enrollmentSchema.create(data);
};

const completeLesson = async (enrollmentId, lessonId) => {
  return enrollmentSchema.findByIdAndUpdate(
    enrollmentId,
    { $addToSet: { completedLessons: lessonId } },
    { new: true }
  );
};

module.exports = {
  enrollUser,
  completeLesson,
};
