import axios, { AxiosError } from "axios";
import APIManager from "./APiManager";

type Signup = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export const userSignup = async (data: Signup) => {
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
    if (error instanceof AxiosError) {
      // console.log("response: ", error.response?.status);
      // console.error("data: ", error.response?.data);
      //   return error.response?.data;
      // return error.response?.data;
      return error;
    }
    return error;
  }
};
