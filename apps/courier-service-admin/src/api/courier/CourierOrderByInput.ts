import { SortOrder } from "../../util/SortOrder";

export type CourierOrderByInput = {
  createdAt?: SortOrder;
  fullNames?: SortOrder;
  id?: SortOrder;
  officeId?: SortOrder;
  password?: SortOrder;
  personalNumber?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
