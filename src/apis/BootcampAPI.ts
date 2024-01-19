import axios, { AxiosError } from "axios";
import APIManager from "./APIManager";
import { getStringData } from "../utils/utils";
import { BootcampCreateDTO } from "../models/dto/BootcampCreateDTO";
import { BootcampUpdateDTO } from "../models/dto/BootcampUpdateDTO";

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

export const createBootcamp = async (bootcamp: BootcampCreateDTO) => {
  const token = await getStringData("token");
  try {
    const result = await APIManager(`/bootcamps`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: bootcamp,
    });

    return result.status;
  } catch (error) {
    return error;
  }
};

export const updateBootcamp = async (bootcamp: BootcampUpdateDTO, id: string) => {
  const token = await getStringData("token");
  try {
    const result = await APIManager(`/bootcamps/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: bootcamp,
    });

    return result.status;
  } catch (error) {
    return error;
  }
};