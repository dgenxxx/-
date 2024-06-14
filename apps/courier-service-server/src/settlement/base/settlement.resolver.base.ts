/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Settlement } from "./Settlement";
import { SettlementCountArgs } from "./SettlementCountArgs";
import { SettlementFindManyArgs } from "./SettlementFindManyArgs";
import { SettlementFindUniqueArgs } from "./SettlementFindUniqueArgs";
import { CreateSettlementArgs } from "./CreateSettlementArgs";
import { UpdateSettlementArgs } from "./UpdateSettlementArgs";
import { DeleteSettlementArgs } from "./DeleteSettlementArgs";
import { OfficeFindManyArgs } from "../../office/base/OfficeFindManyArgs";
import { Office } from "../../office/base/Office";
import { SettlementService } from "../settlement.service";
@graphql.Resolver(() => Settlement)
export class SettlementResolverBase {
  constructor(protected readonly service: SettlementService) {}

  async _settlementsMeta(
    @graphql.Args() args: SettlementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Settlement])
  async settlements(
    @graphql.Args() args: SettlementFindManyArgs
  ): Promise<Settlement[]> {
    return this.service.settlements(args);
  }

  @graphql.Query(() => Settlement, { nullable: true })
  async settlement(
    @graphql.Args() args: SettlementFindUniqueArgs
  ): Promise<Settlement | null> {
    const result = await this.service.settlement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Settlement)
  async createSettlement(
    @graphql.Args() args: CreateSettlementArgs
  ): Promise<Settlement> {
    return await this.service.createSettlement({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Settlement)
  async updateSettlement(
    @graphql.Args() args: UpdateSettlementArgs
  ): Promise<Settlement | null> {
    try {
      return await this.service.updateSettlement({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Settlement)
  async deleteSettlement(
    @graphql.Args() args: DeleteSettlementArgs
  ): Promise<Settlement | null> {
    try {
      return await this.service.deleteSettlement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Office], { name: "offices" })
  async findOffices(
    @graphql.Parent() parent: Settlement,
    @graphql.Args() args: OfficeFindManyArgs
  ): Promise<Office[]> {
    const results = await this.service.findOffices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
