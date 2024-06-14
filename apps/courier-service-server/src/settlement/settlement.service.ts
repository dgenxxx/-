import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SettlementServiceBase } from "./base/settlement.service.base";

@Injectable()
export class SettlementService extends SettlementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
