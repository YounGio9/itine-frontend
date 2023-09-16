import { Get, Post } from "../utils/axios";

export function login(payload) {
  return Post("auth/login", payload);
}

export const getProfile = () => {
  return Get("auth/profile");
};
