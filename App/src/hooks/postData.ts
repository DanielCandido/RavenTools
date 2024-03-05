import api from "@/services/api";
import { AxiosHeaders } from "axios";

interface Options {
  headers: AxiosHeaders;
}

interface DefaultResponse<T> {
  path: string;
  message: string;
  status: string;
  data: T;
}

export default async function postData<T>(
  url: string,
  data: T,
  options?: Options
) {
  const response = await api.post<DefaultResponse<T>>(url, data);

  return response;
}
