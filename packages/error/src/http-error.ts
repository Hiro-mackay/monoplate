import { BaseError, type ErrorContext } from "./base";
import { ErrorCodes, type HttpErrorCodeValues } from "./code";

export class HttpError extends BaseError {
  readonly name: string = HttpError.name;
  readonly code: HttpErrorCodeValues;
  constructor(
    code: HttpErrorCodeValues,
    message: string,
    opts?: {
      cause?: Error;
      context?: ErrorContext;
    },
  ) {
    super({
      message: message,
      cause: opts?.cause,
      context: {
        statusCode: statusToCode(code),
        phrase: code,
        ...opts?.context,
      },
    });
    this.code = code;
  }
}

export const codeToStatus = (code: number): HttpErrorCodeValues => {
  switch (code) {
    case 400:
      return ErrorCodes.http.BAD_REQUEST;
    case 401:
      return ErrorCodes.http.UNAUTHORIZED;
    case 403:
      return ErrorCodes.http.FORBIDDEN;
    case 404:
      return ErrorCodes.http.NOT_FOUND;
    case 405:
      return ErrorCodes.http.METHOD_NOT_ALLOWED;
    case 408:
      return ErrorCodes.http.REQUEST_TIMEOUT;
    case 409:
      return ErrorCodes.http.CONFLICT;
    case 410:
      return ErrorCodes.http.GONE;
    case 413:
      return ErrorCodes.http.CONTENT_TOO_LARGE;
    case 415:
      return ErrorCodes.http.UNSUPPORTED_MEDIA_TYPE;
    case 418:
      return ErrorCodes.http.I_AM_A_TEAPOT;
    case 422:
      return ErrorCodes.http.UNPROCESSABLE_ENTITY;
    case 429:
      return ErrorCodes.http.TOO_MANY_REQUESTS;
    case 500:
      return ErrorCodes.http.INTERNAL_SERVER_ERROR;
    default:
      return ErrorCodes.http.INTERNAL_SERVER_ERROR;
  }
};

export const statusToCode = (status: HttpErrorCodeValues): number => {
  switch (status) {
    case ErrorCodes.http.BAD_REQUEST:
      return 400;
    case ErrorCodes.http.UNAUTHORIZED:
      return 401;
    case ErrorCodes.http.FORBIDDEN:
      return 403;
    case ErrorCodes.http.NOT_FOUND:
      return 404;
    case ErrorCodes.http.METHOD_NOT_ALLOWED:
      return 405;
    case ErrorCodes.http.REQUEST_TIMEOUT:
      return 408;
    case ErrorCodes.http.CONFLICT:
      return 409;
    case ErrorCodes.http.GONE:
      return 410;
    case ErrorCodes.http.CONTENT_TOO_LARGE:
      return 413;
    case ErrorCodes.http.UNSUPPORTED_MEDIA_TYPE:
      return 415;
    case ErrorCodes.http.I_AM_A_TEAPOT:
      return 418;
    case ErrorCodes.http.UNPROCESSABLE_ENTITY:
      return 422;
    case ErrorCodes.http.TOO_MANY_REQUESTS:
      return 429;
    case ErrorCodes.http.INTERNAL_SERVER_ERROR:
      return 500;
    default:
      return 500;
  }
};
