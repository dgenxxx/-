import { CarUpdateManyWithoutCouriersInput } from "./CarUpdateManyWithoutCouriersInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type CourierUpdateInput = {
  cars?: CarUpdateManyWithoutCouriersInput;
  fullNames?: string | null;
  office?: OfficeWhereUniqueInput | null;
  password?: string | null;
  personalNumber?: string | null;
  phone?: string | null;
  username?: string | null;
};
