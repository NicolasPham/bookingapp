import axios from "axios";

export const axiosIntance = axios.create({
  baseUrl: "https://sore-rose-barracuda-kit.cyclic.app/api/",
});
