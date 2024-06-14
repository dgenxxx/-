import { Module } from "@nestjs/common";
import { SettlementModuleBase } from "./base/settlement.module.base";
import { SettlementService } from "./settlement.service";
import { SettlementController } from "./settlement.controller";
import { SettlementResolver } from "./settlement.resolver";

@Module({
  imports: [SettlementModuleBase],
  controllers: [SettlementController],
  providers: [SettlementService, SettlementResolver],
  exports: [SettlementService],
})
export class SettlementModule {}
