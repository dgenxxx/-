import { OfficeCreateNestedManyWithoutSettlementsInput } from "./OfficeCreateNestedManyWithoutSettlementsInput";

export type SettlementCreateInput = {
  district?: string | null;
  municipality?: string | null;
  name?: string | null;
  offices?: OfficeCreateNestedManyWithoutSettlementsInput;
  postalCode?: number | null;
};
