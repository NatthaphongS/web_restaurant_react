import Joi from "joi";

const createOrderSchema = Joi.object({
  deliveryAddress: Joi.string().trim().required(),
  summaryPrice: Joi.number().required(),
  userId: Joi.string().trim().required(),
  paymentImage: Joi.any().required(),
  orderDetail: Joi.array()
    .min(1)
    .items(
      Joi.object({
        menuId: Joi.number().required(),
        amount: Joi.number().required(),
        price: Joi.number().required(),
      })
    ),
});

const validateCreateOrder = (input) => {
  const { error } = createOrderSchema.validate(input, { abortEarly: false });
  // โดยปกติถ้า validateตัวไหนไม่ผ่าน จะหยุด validate ต่อ แต่การใส่ abortEarly:false จะทำให้validate ทุกตัว
  // console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, { path, message }) => {
      acc[path[0]] = message;
      return acc;
    }, {});
    return result; //{deliveryAddress:"error message",orderDetail.....,paymentImage....}
  }
};

export default validateCreateOrder;
