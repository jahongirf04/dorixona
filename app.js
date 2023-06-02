const express = require("express");
require("dotenv").config();
const app = express();

const routes = require("./routes");
const { prependListener } = require("./config/connection_db");

//Parse JSON bodies
app.use(express.json());

//Mount routes
app.use("/", routes);

// Start the server
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
