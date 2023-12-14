import { useEffect } from 'react';
import { createContext } from 'react';

import axios from '../config/axios';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utils/local-storage';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null); // {id,firstname,lastname,role}
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get('/auth/me')
        .then((res) => setAuthUser(res.data.user))
        .catch((err) => console.log(err))
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credentail) => {
    const id = toast.loading(`Login process`);
    try {
      const res = await axios.post('/auth/login', credentail);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
      toast.update(id, {
        render: res.data.message,
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(id, {
        render: error.response?.data.message,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
    // console.log(credentail);
  };

  const register = async (registerInputObject) => {
    const id = toast.loading(`Register process`);
    try {
      const res = await axios.post('/auth/register', registerInputObject);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
      toast.update(id, {
        render: res.data.message,
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(id, {
        render: error.response?.data.message,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const editUser = async (id, editDataOdject) => {
    try {
      const res = await axios.patch(`/auth/editUser/${id}`, editDataOdject);
      setAuthUser(res.data.user);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        editUser,
        authUser,
        setAuthUser,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
