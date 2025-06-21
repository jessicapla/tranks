import { BaseException } from "./base.exception.ts";

export class InvalidEntityException extends BaseException {
  constructor(message: string = "Entity validation failed", details?: unknown) {
    super(message, details);
  }
}
