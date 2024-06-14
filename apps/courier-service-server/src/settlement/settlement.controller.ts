import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SettlementService } from "./settlement.service";
import { SettlementControllerBase } from "./base/settlement.controller.base";

@swagger.ApiTags("settlements")
@common.Controller("settlements")
export class SettlementController extends SettlementControllerBase {
  constructor(protected readonly service: SettlementService) {
    super(service);
  }
}
