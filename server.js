const express = require("express");
const config = require("./src/configs/app.config");
const cors = require("cors");
const errorHandleMiddleware = require("./src/middleware/errorHandler");
const rosterRoute = require("./src/Routes/rosters");
const healthCheck = require("./src/Routes/healthCheck");
const appLogger = require("./src/middleware/loggHandler");
const auth = require("./src/middleware/authorizationHandler");

require("./src/startup/log")();
const app = express();
const port = 3002;

if (!config.jwtPrivateKey) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

//enable CORS (for testing only -remove in production/deployment)
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://myhuddle-dev.kaccess.com.au/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/roster/getdetails", auth, rosterRoute);
//app.use("/api/roster/getdetails", rosterRoute);
app.use("/healthcheck", healthCheck);

app.use(errorHandleMiddleware);
app.listen(port, () => console.log(`Server i listening on port ${port}`));
