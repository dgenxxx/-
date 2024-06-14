/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CarUpdateManyWithoutOfficesInput } from "./CarUpdateManyWithoutOfficesInput";
import { Type } from "class-transformer";
import { CourierUpdateManyWithoutOfficesInput } from "./CourierUpdateManyWithoutOfficesInput";
import { SettlementWhereUniqueInput } from "../../settlement/base/SettlementWhereUniqueInput";

@InputType()
class OfficeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => CarUpdateManyWithoutOfficesInput,
  })
  @ValidateNested()
  @Type(() => CarUpdateManyWithoutOfficesInput)
  @IsOptional()
  @Field(() => CarUpdateManyWithoutOfficesInput, {
    nullable: true,
  })
  cars?: CarUpdateManyWithoutOfficesInput;

  @ApiProperty({
    required: false,
    type: () => CourierUpdateManyWithoutOfficesInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateManyWithoutOfficesInput)
  @IsOptional()
  @Field(() => CourierUpdateManyWithoutOfficesInput, {
    nullable: true,
  })
  couriers?: CourierUpdateManyWithoutOfficesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hoursOfOperation?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  manager?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => SettlementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SettlementWhereUniqueInput)
  @IsOptional()
  @Field(() => SettlementWhereUniqueInput, {
    nullable: true,
  })
  settlement?: SettlementWhereUniqueInput | null;
}

export { OfficeUpdateInput as OfficeUpdateInput };