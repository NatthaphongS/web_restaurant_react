import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";
import Joi from "joi";

export const MenuContext = createContext();

export default function MenuContextProvider({ children }) {
  const addMenuSchema = Joi.object({
    menuImage: Joi.any().required(),
    menuName: Joi.string().trim().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    status: Joi.string().required(),
    description: Joi.string().allow(""),
  });

  const getMenu = async (category) => {
    try {
      if (!category) {
        category = "all";
      }
      const menus = await axios.get(`/menu/${category}`);
      return menus; //[({}, {}, {}, {}, {})];
    } catch (err) {
      console.log(err);
    }
  };

  const createMenu = async (data) => {
    try {
      return await axios.post("/menu/create", data);
    } catch (err) {
      console.log(err);
    }
  };

  const editMenu = async (id, editData) => {
    try {
      console.log("=====3");
      return await axios.patch(`/menu/edit/${id}`, editData);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteMenu = async (id) => {
    try {
      return await axios.delete(`/menu/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MenuContext.Provider
      value={{ getMenu, createMenu, editMenu, deleteMenu, addMenuSchema }}
    >
      {children}
    </MenuContext.Provider>
  );
}
