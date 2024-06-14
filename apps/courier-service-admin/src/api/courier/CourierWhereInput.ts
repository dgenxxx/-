import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type CourierWhereInput = {
  cars?: CarListRelationFilter;
  fullNames?: StringNullableFilter;
  id?: StringFilter;
  office?: OfficeWhereUniqueInput;
  password?: StringNullableFilter;
  personalNumber?: StringNullableFilter;
  phone?: StringNullableFilter;
  username?: StringNullableFilter;
};
