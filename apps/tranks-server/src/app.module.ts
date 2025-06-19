import { Module } from "@danet/core";
import { HealthController } from "./infrastructure/web/health/health.controller.ts";

@Module({
  controllers: [HealthController],
})
export class AppModule {}
