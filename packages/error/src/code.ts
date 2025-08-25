export const ErrorCodes = {
  /**
   * Http Errors
   */
  http: {
    BAD_REQUEST: "BadRequest",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "NotFound",
    METHOD_NOT_ALLOWED: "MethodNotAllowed",
    REQUEST_TIMEOUT: "RequestTimeout",
    CONFLICT: "Conflict",
    GONE: "Gone",
    CONTENT_TOO_LARGE: "ContentTooLarge",
    UNSUPPORTED_MEDIA_TYPE: "UnsupportedMediaType",
    I_AM_A_TEAPOT: "IAmATeapot",
    UNPROCESSABLE_ENTITY: "UnprocessableEntity",
    TOO_MANY_REQUESTS: "TooManyRequests",
    INTERNAL_SERVER_ERROR: "InternalServerError",
  },

  /**
   * Schema Errors
   */
  schema: {
    INVALID_ZOD_VALIDATION: "InvalidValidation",
  },

  /**
   * Domain Errors
   */
  domain: {},
} as const;

export type ErrorCodeValues =
  | HttpErrorCodeValues
  | SchemaErrorCodeValues
  | DomainErrorCodeValues;

export type HttpErrorCodeValues =
  (typeof ErrorCodes.http)[keyof typeof ErrorCodes.http];

export type SchemaErrorCodeValues =
  (typeof ErrorCodes.schema)[keyof typeof ErrorCodes.schema];

export type DomainErrorCodeValues =
  (typeof ErrorCodes.domain)[keyof typeof ErrorCodes.domain];
