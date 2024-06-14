import { SortOrder } from "../../util/SortOrder";

export type SettlementOrderByInput = {
  createdAt?: SortOrder;
  district?: SortOrder;
  id?: SortOrder;
  municipality?: SortOrder;
  name?: SortOrder;
  postalCode?: SortOrder;
  updatedAt?: SortOrder;
};
