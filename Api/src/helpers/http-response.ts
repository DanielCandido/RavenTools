import {
  HTTP_BAD_REQUEST_MESSAGE,
  HTTP_CONFLICT_MESSAGE,
  HTTP_INTERNAL_SERVER_ERROR_MESSAGE,
  HTTP_NOT_FOUND_MESSAGE,
  HTTP_OK_MESSAGE,
  HTTP_UNAUTHORIZED_MESSAGE,
} from "../constants";
import { Request, Response } from "express";

interface ErrorResponse {
  res: Response;
  req: Request;
  path: string;
  message?: string;
  error: Error | any;
  status?: number;
}

interface SuccessResponse {
  res: Response;
  req: Request;
  data: any;
  path: string;
  message?: string;
  status?: number;
}

const badRequest = ({
  message = HTTP_BAD_REQUEST_MESSAGE,
  path,
  res,
  req,
  error,
  status = 400,
}: ErrorResponse) => {
  return res.status(400).json({ path, message, error, status });
};

const internalServerError = ({
  message = HTTP_INTERNAL_SERVER_ERROR_MESSAGE,
  path,
  res,
  req,
  error,
  status = 500,
}: ErrorResponse) => {
  return res.status(500).json({ path, message, error, status });
};

const unauthorized = ({
  message = HTTP_UNAUTHORIZED_MESSAGE,
  path,
  res,
  req,
  error,
  status = 401,
}: ErrorResponse) => {
  return res.status(401).json({ path, message, error, status });
};

const notFound = ({
  message = HTTP_NOT_FOUND_MESSAGE,
  path,
  res,
  req,
  error,
  status = 404,
}: ErrorResponse) => {
  return res.status(404).json({ path, message, error, status });
};

const ok = ({
  data,
  path,
  res,
  req,
  message = HTTP_OK_MESSAGE,
  status = 200,
}: SuccessResponse) => {
  return res.status(200).json({ data, path, message, status });
};

const conflict = ({
  message = HTTP_CONFLICT_MESSAGE,
  path,
  res,
  req,
  error,
  status = 409,
}: ErrorResponse) => {
  return res.status(409).json({ path, message, error, status });
};

export default {
  notFound,
  badRequest,
  internalServerError,
  unauthorized,
  ok,
  conflict,
};
