import { SettlementWhereInput } from "./SettlementWhereInput";
import { SettlementOrderByInput } from "./SettlementOrderByInput";

export type SettlementFindManyArgs = {
  where?: SettlementWhereInput;
  orderBy?: Array<SettlementOrderByInput>;
  skip?: number;
  take?: number;
};
