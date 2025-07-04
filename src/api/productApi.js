import axios from "axios";
import { authApiClient } from "./axios";

export const getAllProducts = async () => {
  const response = await authApiClient("/products");
  return response.data;
};
