import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { CourierListRelationFilter } from "../courier/CourierListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SettlementWhereUniqueInput } from "../settlement/SettlementWhereUniqueInput";

export type OfficeWhereInput = {
  address?: StringNullableFilter;
  cars?: CarListRelationFilter;
  couriers?: CourierListRelationFilter;
  hoursOfOperation?: StringNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  settlement?: SettlementWhereUniqueInput;
};
