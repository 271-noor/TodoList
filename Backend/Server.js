const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes")

const cors = require("cors"); //cors() ek pacage h jo bdlte origin (PORT) ko handle krta h

const app = express();
const PORT = process.env.PORT || 5000; //agr process.env.PORT h to oose use kro nhi 5000 ko use kro

// Middleware
app.use(express.json()); //body me json ko pars kr paenge, ye express ka built in feature h

app.use(cors()); //isse hmari cors origin request handle ho jaegi

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

    app.use("/api", routes)

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
