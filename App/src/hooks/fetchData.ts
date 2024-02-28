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

export default async function fetchData<T>(url: string, options?: Options) {
  const response = await api.get<DefaultResponse<T>>(url);

  return response;
}
