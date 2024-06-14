import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type CarWhereInput = {
  courier?: CourierWhereUniqueInput;
  fuelConsumption?: FloatNullableFilter;
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  office?: OfficeWhereUniqueInput;
  registrationNumber?: StringNullableFilter;
};
