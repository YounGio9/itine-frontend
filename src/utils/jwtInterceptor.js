import axios from "axios";

const baseUrl = "http://localhost:8000/";
const client = axios.create({
  withCredentials: true,
  baseURL: `${baseUrl}`,
  headers: {
    authorization: localStorage.getItem("token") ?? "",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if ([401, 403].includes(error.response.status)) {
      const { data } = await axios.get(`${baseUrl}auth/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", `Bearer ${data.accessToken}`);
      console.log(error.config);
      return axios({
        ...error.config,
        headers: { authorization: localStorage.getItem("token") ?? "" },
      });
    } else {
      return Promise.reject(error);
    }
  }
);

export default client;
