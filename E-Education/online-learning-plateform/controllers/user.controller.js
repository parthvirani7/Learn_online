const { createToken, verifyToken } = require("../middlewares/auth");
const userService = require("../services/user.service");

/* GET USER */
const getUser = async (req, res) => {
  const users = await userService.getUser();
  res.status(200).json({
    message: "Users retrieved successfully",
    data: users,
  });
};

/* GET USER'S PROFILE */
const getProfile = async (req, res) => {
  const token = req.cookies["login_token"];
  if (!token) {
    return res.status(401).json({ message: "You are not logged in" });
  }
  const user = verifyToken(token);
  res.status(200).json({ message: "Profile retrieved successfully", user });
};

/* ADD or REGISTER USER */
const addUser = async (req, res) => {
  try {
    const body = req.body;
    const userExist = await userService.getUserByEmail(body.email);
    if (userExist) {
      throw new Error("User already exists");
    }
    const user = await userService.addUser(body);
    if (user) {
    }
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/* USER LOGIN */
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await userService.findUser(email);

  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }
  if (password === foundUser.password) {
    const data = {
      _id: foundUser._id,
      email: foundUser.email,
      contactNumber: foundUser.contactNumber,
      role: foundUser.role,
    };

    const token = createToken(data);
    res.cookie("login_token", token); // Set cookie with token
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(400).json({ message: "Invalid password" });
  }
};

/* UPDATE USER */
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await userService.updateUser(id, body);
    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/* DELETE USER */
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getUser,
  getProfile,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
};
