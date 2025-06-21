import { IsNumber, IsString } from "@danet/core/validation";
import { Entity } from "../shared/domain/base.entity.ts";

enum accountTypes {
  "NORMAL",
  "DEBT",
  "UNBUDGETED"
}

export class Account extends Entity {
  @IsString()
  private _name: string;

  @IsString()
  private _type: accountTypes;

  @IsNumber()
  private _balance!: number;

  @IsNumber()
  private readonly _startBalance: number;

  constructor(id: string, name: string, type: accountTypes, startBalance: number) {
    super(id);
    this._name = name;
    this._type = type;
    this._balance = startBalance;
    this._startBalance = startBalance;
  }

  getName(): string {
    return this._name;
  }
  getType(): accountTypes {
    return this._type;
  }
  getBalance(): number {
    return this._balance;
  }
  getStartBalance(): number {
    return this._startBalance;
  }

  set name(newName: string) {
    this._name = newName;
    this.update();
  }
  set type(newType: accountTypes) {
    this._type = newType;
    this.update();
  }
  set balance(newBalance: number) {
    this._balance = newBalance;
    this.update();
  }
}