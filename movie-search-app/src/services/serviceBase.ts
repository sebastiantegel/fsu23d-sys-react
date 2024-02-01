import axios from "axios";

export const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};
