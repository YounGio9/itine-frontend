import { Get, Post } from "../utils/axios";

export function login(payload) {
  return Post("auth/login", payload);
}

export const getProfile = async () => {
  return Get("auth/profile");
};
