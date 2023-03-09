const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./config/dbConnection");

const port = process.env.port;
const app = express();

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);
connectDb();

app.listen(port, () => {
  console.log(`We are live on port: ${port}`);
});
