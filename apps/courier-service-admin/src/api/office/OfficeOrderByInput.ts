import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  hoursOfOperation?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  settlementId?: SortOrder;
  updatedAt?: SortOrder;
};
