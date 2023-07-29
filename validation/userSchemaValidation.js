import Joi from "joi";
const userSchemaValidation = async (dataToValidate) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    university_name: Joi.string().min(3).max(30).required(),
    phone_no: Joi.string().required(),
  });
  const { error } = schema.validate(dataToValidate);
  return error;
};
export { userSchemaValidation };
