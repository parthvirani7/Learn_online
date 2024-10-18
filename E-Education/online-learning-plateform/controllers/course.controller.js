const courseService = require("../services/course.services");

const getCourses = async (req, res) => {
  const courses = await courseService.getCourses();
  res.status(200).json({ message: "Courses retrieved successfully", data: courses });
};

const addCourse = async (req, res) => {
  const course = await courseService.addCourse(req.body);
  res.status(201).json({ message: "Course created successfully", data: course });
};

const updateCourse = async (req, res) => {
  const course = await courseService.updateCourse(req.params.id, req.body);
  res.status(200).json({ message: "Course updated successfully", data: course });
};

const deleteCourse = async (req, res) => {
  await courseService.deleteCourse(req.params.id);
  res.status(200).json({ message: "Course deleted successfully" });
};

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
