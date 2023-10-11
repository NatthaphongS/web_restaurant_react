import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";

import RegisterInput from "./RegisterInput";
import useAuth from "../../hook/use-auth";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).allow(""),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  // โดยปกติถ้า validateตัวไหนไม่ผ่าน จะหยุด validate ต่อ แต่การใส่ abortEarly:false จะทำให้validate ทุกตัว
  // console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, { path, message }) => {
      acc[path[0]] = message;
      return acc;
    }, {});
    return result; //{firstName:"error message",lastName.....}
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { register } = useAuth();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate
    const validationError = validateRegister(input); // undefined หรือ  error object
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };

  return (
    <form className="flex flex-col gap-3 w-full " onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <RegisterInput
          label="ชื่อ"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          hasError={error.firstName}
        />
        <RegisterInput
          label="นามสกุล"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          hasError={error.lastName}
        />
      </div>
      <RegisterInput
        label="เบอร์โทร"
        name="mobile"
        value={input.mobile}
        onChange={handleChangeInput}
        hasError={error.mobile}
      />
      <RegisterInput
        label="อีเมล"
        name="email"
        value={input.email}
        onChange={handleChangeInput}
        hasError={error.email}
      />
      <RegisterInput
        label="รหัสผ่าน"
        name="password"
        value={input.password}
        onChange={handleChangeInput}
        hasError={error.password}
      />
      <RegisterInput
        label="ยืนยันรหัสผ่าน"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={handleChangeInput}
        hasError={error.confirmPassword}
      />
      <button className="block w-full rounded-xl py-2 bg-secondary text-primary font-bold focus:ring-2 focus:ring-secondary mt-3 hover:bg-secondaryDark active:scale-95">
        สมัครสมาชิค
      </button>
    </form>
  );
}
