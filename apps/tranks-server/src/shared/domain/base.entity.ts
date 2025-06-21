import { IsDate, IsString, validateObject } from "@danet/core/validation";
import { InvalidEntityException } from "./exceptions/invalid-entity.exception.ts";

export abstract class Entity {
  
  @IsString()
  public readonly id: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt?: Date

  constructor(id: string) {
    this.id = id;
    this.createdAt = new Date()
  }

  public equals(other?: Entity): boolean {
    if (other === undefined || other === null || !(other instanceof Entity))
      return false;
    return this.id === other.id
  }

  protected update() {
    this.updatedAt = new Date();
    this.validate();
  }

  protected validate(): void {
    // @ts-ignore: validateObject expects a class, but this.constructor works for decorators
    const errors = validateObject(this, this.constructor as { new (...args: unknown[]): object });
    if (errors.length) {
      throw new InvalidEntityException("Entity validation failed", errors);
    }
  }
}