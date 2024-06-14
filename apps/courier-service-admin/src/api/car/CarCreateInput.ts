import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";

export type CarCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  fuelConsumption?: number | null;
  make?: string | null;
  model?: string | null;
  office?: OfficeWhereUniqueInput | null;
  registrationNumber?: string | null;
};
