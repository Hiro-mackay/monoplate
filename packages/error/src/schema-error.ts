import type { ZodError } from "zod";
import type { $ZodFlattenedError } from "zod/v4/core";
import { z } from "zod/v4/mini";
import { BaseError } from "./base";
import { ErrorCodes, type SchemaErrorCodeValues } from "./code";

type Context = {
  details: $ZodFlattenedError<Record<string, string[]>>;
  prettify: string;
};

export class SchemaError extends BaseError {
  readonly name = SchemaError.name;
  readonly code: SchemaErrorCodeValues;
  constructor(
    code: SchemaErrorCodeValues,
    message: string,
    opts?: {
      context: Context;
      cause?: Error;
    },
  ) {
    super({ message, cause: opts?.cause, context: opts?.context });
    this.code = code;
  }

  static fromZod(error: ZodError) {
    return new SchemaError(
      ErrorCodes.schema.INVALID_ZOD_VALIDATION,
      "Invalid Zod Validation",
      {
        context: {
          prettify: z.prettifyError(error),
          details: z.flattenError(error),
        },
      },
    );
  }
}
