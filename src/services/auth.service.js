import { Post } from "../utils/axios";

export function login(payload) {
  return Post(payload);
}
