import User from "../model/userModel.js";
const createUser = async (query) => {
  return await User.create(query);
};
export default createUser;
