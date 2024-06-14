import { CarCreateNestedManyWithoutOfficesInput } from "./CarCreateNestedManyWithoutOfficesInput";
import { CourierCreateNestedManyWithoutOfficesInput } from "./CourierCreateNestedManyWithoutOfficesInput";
import { SettlementWhereUniqueInput } from "../settlement/SettlementWhereUniqueInput";

export type OfficeCreateInput = {
  address?: string | null;
  cars?: CarCreateNestedManyWithoutOfficesInput;
  couriers?: CourierCreateNestedManyWithoutOfficesInput;
  hoursOfOperation?: string | null;
  manager?: string | null;
  name?: string | null;
  phone?: string | null;
  settlement?: SettlementWhereUniqueInput | null;
};
