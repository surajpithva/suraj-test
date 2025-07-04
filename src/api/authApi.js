import { authApiClient } from "./axios";

export const loginApi = (data) => authApiClient.post("/auth/login", data);
