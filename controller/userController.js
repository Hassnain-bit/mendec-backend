import createUser from "../service/userService.js";
import {
  successResponse,
  serverErrorResponse,
  validationErrorResponse,
} from "../utilities/response.js";
import messageUtil from "../utilities/message.js";

import { userSchemaValidation } from "../validation/userSchemaValidation.js";
const userSignUp = async (req, res) => {
  try {
    //check errors for fields
    let error = await userSchemaValidation(req.body);
    if (error) return validationErrorResponse(res, error);

    let user = await createUser({
      ...req.body,
    });

    return successResponse(res, messageUtil.userCreate, user);
  } catch (err) {
    return serverErrorResponse(res, err);
  }
};
export default userSignUp;
