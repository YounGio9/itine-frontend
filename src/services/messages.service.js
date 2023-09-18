import { Get } from "../utils/axios";

export const getMessages = async () => {
  const data = await Get("messages");

  return data.data;
};
