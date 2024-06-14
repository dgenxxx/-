import { OfficeUpdateManyWithoutSettlementsInput } from "./OfficeUpdateManyWithoutSettlementsInput";

export type SettlementUpdateInput = {
  district?: string | null;
  municipality?: string | null;
  name?: string | null;
  offices?: OfficeUpdateManyWithoutSettlementsInput;
  postalCode?: number | null;
};
