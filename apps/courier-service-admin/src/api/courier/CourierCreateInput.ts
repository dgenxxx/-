import { CarCreateNestedManyWithoutCouriersInput } from "./CarCreateNestedManyWithoutCouriersInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type CourierCreateInput = {
  cars?: CarCreateNestedManyWithoutCouriersInput;
  fullNames?: string | null;
  office?: OfficeWhereUniqueInput | null;
  password?: string | null;
  personalNumber?: string | null;
  phone?: string | null;
  username?: string | null;
};
