import { useState } from 'react';
import LoginInput from './LoginInput';
import useAuth from '../../hook/use-auth';

export default function LoginForm({ setIsOpen }) {
  const [input, setInput] = useState({ emailOrMobile: '', password: '' });

  const { login } = useAuth(); //{login:login}

  // sent request
  // localstorage setItem('token')
  // stage => user (used many where should keep in context)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      setIsOpen(false);
    } catch (err) {
      // console.log(error)
    }
  };
  return (
    <form
      className="transition duration-150 ease-in-out flex flex-col gap-3 w-full "
      onSubmit={handleSubmit}
    >
      <LoginInput
        label={'อีเมล หรือ เบอร์โทร'}
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />
      <LoginInput
        label={'รหัสผ่าน'}
        type="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <button className="block w-full rounded-xl py-2 bg-secondary text-primary font-bold focus:ring-2 focus:ring-secondary mt-3 hover:bg-secondaryDark active:scale-95">
        เข้าสู่ระบบ
      </button>
    </form>
  );
}
