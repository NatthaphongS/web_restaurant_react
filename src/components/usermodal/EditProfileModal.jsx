import { useState } from "react";
import RegisterInput from "./RegisterInput";
import AddressTextArea from "./AddressTextArea";
import useAuth from "../../hook/use-auth";
import Joi from "joi";
import Loading from "../Loading/Loading";

const editSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).allow(null).allow(""),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  address: Joi.string().trim().allow(null).allow(""),
});

const validateEdit = (input) => {
  const { error } = editSchema.validate(input, { abortEarly: false });
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

export default function EditProfileModal({ setIsEdit }) {
  const { authUser, editUser, setAuthUser } = useAuth();
  const [input, setInput] = useState({
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    mobile: authUser.mobile,
    email: authUser.email,
    address: authUser.address,
  });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateEdit(input); // undefined หรือ  error object
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    const res = await editUser(authUser.id, input);
    setIsEdit(false);
  };
  return (
    <>
      <div className="fixed inset-0 bg-primary opacity-70 z-20"></div>
      <div className="fixed z-50 min-h-full inset-0 flex justify-center items-center ">
        <div className="relative">
          <div
            onClick={() => setIsEdit(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <img src="/icons/Close.png" alt="Close" />
          </div>
          <div className="w-[540px] bg-primary flex flex-col items-center justify-center rounded-2xl gap-5 px-[72px] py-[46px]">
            <form
              className="flex flex-col gap-3 w-full "
              onSubmit={handleSubmit}
            >
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
              <AddressTextArea
                label="ที่อยู่จัดส่ง"
                name="address"
                value={input.address}
                onChange={handleChangeInput}
                hasError={error.address}
              />

              <button className="block w-full rounded-xl py-2 bg-secondary text-primary font-bold focus:ring-2 focus:ring-secondary mt-3 hover:bg-secondaryDark active:scale-95">
                แก้ไขข้อมูลส่วนตัว
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
