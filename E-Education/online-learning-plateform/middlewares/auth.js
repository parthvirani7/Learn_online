const jwt = require("jsonwebtoken");
const secret =  "MySecretKey"; 

const createToken = (data) => {
  return jwt.sign({ data }, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

const authenticate = (req, res, next) => {
  const token = req.cookies.login_token;
  if (!token) {
    return res.status(401).json({ message: "You are not logged in" });
  }
  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const restrict = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.data.role)) {
      next();
    } else {
      res.status(403).json({ message: "You are unauthorized" });
    }
  };
};

module.exports = { createToken, verifyToken, authenticate, restrict };
