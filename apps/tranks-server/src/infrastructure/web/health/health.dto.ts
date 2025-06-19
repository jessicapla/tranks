import { IsDate, IsString } from "@danet/core/validation";

export class HealthCheckDto {
  @IsString()
  status!: string;

  @IsDate()
  timestamp!: number;
}
