const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const routes = require("./routes");
const { jwtStrategy } = require("./config/passport");
const passport = require("passport");

const app = express();
const PORT = config.port;
const DB_URL = config.mongoose.url;

mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("Error connecting to DB:", error));

app.use(cors({ origin: '*' }));
app.options("*", cors());
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use(express.json());

app.use((req, res, next) => { 
    console.log(`${req.method} ${req.originalUrl}`);
    // console.log(req);
    next();
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Xexit Backend listening on port ${PORT}`);
});
