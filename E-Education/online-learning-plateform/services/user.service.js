const { userSchema } = require("../models/user.model");

const getUser = () => {
  return userSchema.find();
};

const addUser = (body) => {
  return userSchema.create(body);
};

const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body }, { new: true });
};

const findUser = (email) => {
  return userSchema.findOne({ email });
};

const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

module.exports = {
  getUser,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  findUser,
};
