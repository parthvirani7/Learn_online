const { courseSchema } = require("../models/course.model");

const getCourses = () => {
  return courseSchema.find();
};

const addCourse = (body) => {
  return courseSchema.create(body);
};

const updateCourse = (id, body) => {
  return courseSchema.findByIdAndUpdate(id, { $set: body }, { new: true });
};

const deleteCourse = (id) => {
  return courseSchema.findByIdAndDelete(id);
};

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
