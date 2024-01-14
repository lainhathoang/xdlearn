import axios, { AxiosError } from "axios";
import APIManager from "./APiManager";

export const getBootcamps = async () => {
  try {
    const results = await APIManager("/bootcamps", {
      method: "GET",
    });
    return results;
  } catch (error) {
    return error;
  }
};

export const getBootcampById = async() => {
  
}
