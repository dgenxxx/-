import * as graphql from "@nestjs/graphql";
import { SettlementResolverBase } from "./base/settlement.resolver.base";
import { Settlement } from "./base/Settlement";
import { SettlementService } from "./settlement.service";

@graphql.Resolver(() => Settlement)
export class SettlementResolver extends SettlementResolverBase {
  constructor(protected readonly service: SettlementService) {
    super(service);
  }
}
