import axios from "axios";

export const useFetch = async <T>(url: string) => {
  const res = await axios.get<T>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`);
  console.log(res);

  return res.data;
};
