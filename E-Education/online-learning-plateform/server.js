const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./db/db.connect');

const userRoutes = require('./routes/user.route');
const courseRoutes = require('./routes/course.route');
const enrollmentRoutes = require('./routes/enrollment.route');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to the Education Management API");
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
