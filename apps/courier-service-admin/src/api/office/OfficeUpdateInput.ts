import { CarUpdateManyWithoutOfficesInput } from "./CarUpdateManyWithoutOfficesInput";
import { CourierUpdateManyWithoutOfficesInput } from "./CourierUpdateManyWithoutOfficesInput";
import { SettlementWhereUniqueInput } from "../settlement/SettlementWhereUniqueInput";

export type OfficeUpdateInput = {
  address?: string | null;
  cars?: CarUpdateManyWithoutOfficesInput;
  couriers?: CourierUpdateManyWithoutOfficesInput;
  hoursOfOperation?: string | null;
  manager?: string | null;
  name?: string | null;
  phone?: string | null;
  settlement?: SettlementWhereUniqueInput | null;
};
