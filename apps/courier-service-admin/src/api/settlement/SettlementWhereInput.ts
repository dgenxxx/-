import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeListRelationFilter } from "../office/OfficeListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SettlementWhereInput = {
  district?: StringNullableFilter;
  id?: StringFilter;
  municipality?: StringNullableFilter;
  name?: StringNullableFilter;
  offices?: OfficeListRelationFilter;
  postalCode?: IntNullableFilter;
};
