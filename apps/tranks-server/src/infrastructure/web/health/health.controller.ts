import { Controller, Get } from "@danet/core";
import { HealthCheckDto } from "./health.dto.ts";
import { ReturnedType } from "@danet/swagger/decorators";

@Controller("/health")
export class HealthController {
  @ReturnedType(HealthCheckDto)
  @Get()
  check(): HealthCheckDto {
    return {
      status: "ok",
      timestamp: Date.now(),
    };
  }
}
