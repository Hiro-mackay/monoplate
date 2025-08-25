import type { ErrorCodeValues } from "./code";

export type ErrorContext = Record<string, unknown>;

export abstract class BaseError<
  TContext extends ErrorContext = ErrorContext,
> extends Error {
  abstract readonly name: string;
  abstract readonly code: ErrorCodeValues;
  readonly cause?: Error;
  readonly context?: TContext;

  constructor(ops: {
    message: string;
    cause?: Error;
    context?: TContext;
  }) {
    super(ops.message);
    this.cause = ops.cause;
    this.context = ops.context;
  }

  toString(tiny?: boolean) {
    if (tiny) return `${this.name}: ${this.message}`;

    const additional: Record<string, unknown> = {};
    if (this.cause) {
      additional.cause = this.cause;
    }
    if (this.context) {
      additional.context = this.context;
    }

    const isAdditional = Object.keys(additional).length > 0;

    return `${this.name}: ${this.message}${
      isAdditional ? ` ${JSON.stringify(additional)}` : ""
    }`;
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      cause: this.cause,
      context: this.context,
    };
  }
}
