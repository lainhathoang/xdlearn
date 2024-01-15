import axios, { AxiosError } from "axios";
import APIManager from "./APiManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeObjectData, storeStringData } from "../utils/utils";

export const signup = async (data: SignUp) => {
  try {
    const results = await APIManager("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return results;
  } catch (error) {
    // if (error instanceof AxiosError) {
    // console.log("response: ", error.response?.status);
    // console.error("data: ", error.response?.data);
    //   return error.response?.data;
    // return error.response?.data;
    //  return error;
    // }
    return error;
  }
};

export const signin = async (data: SignIn) => {
  try {
    const result = await APIManager("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    // store data
    await storeObjectData("user", result.data.user);
    await storeStringData("token", result.data.token);
    return result.data;
  } catch (error) {
    return error;
  }
};
