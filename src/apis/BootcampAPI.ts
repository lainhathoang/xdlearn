import axios, { AxiosError } from "axios";
import APIManager from "./APIManager";
import { getStringData } from "../utils/utils";

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

export const getBootcampById = async () => {};

export const deleteBootcampById = async (bootcampId: string) => {
  const token = await getStringData("token");
  console.log(">> token: ", token);
  try {
    const result = await APIManager(`/bootcamps/${bootcampId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return result.status;
  } catch (error) {
    return error;
  }
};
