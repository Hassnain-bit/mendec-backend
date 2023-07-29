import express from "express";
import connectDB from "./config/dataBase.js";
dotenv.config();
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/main.routes.js";
import AdminJS from "adminjs";
import buildAdminRouter from "./adminBro/adminRouter.js";
import options from "./adminBro/adminOptions.js";
// import cronJob from "./utilities/cronJob.js";

// import option from "./adminBro/adminOption.js";
// import sendMeassge from "./utilities/twillio.js";
const admin = new AdminJS(options);
const routers = buildAdminRouter(admin);
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
// cronJob();
app.use("/", routes);
app.use(admin.options.rootPath, routers);

app.get("/", (req, res) => {
  res.send("From homepage");
});

app.listen(6002, () => {
  console.log("App is running on port 6002");
});
