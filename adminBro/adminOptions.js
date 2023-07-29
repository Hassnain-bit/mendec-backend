import AdminJS from "adminjs";
import AdminJSMongoose from "@adminjs/mongoose";

AdminJS.registerAdapter(AdminJSMongoose);

import User from "../model/userModel.js";

const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: "welcom to the panel",
    },
    messages: {
      loginWelcome: "Welcome To  Admin Panel",
    },
  },
};
const adminJsOptions = {
  locale,

  resources: [User],
  branding: {
    companyName: "Admin Panel",
    softwareBrothers: false,
    logo: "",
  },
};

export default adminJsOptions;
