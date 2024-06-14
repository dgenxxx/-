import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  fuelConsumption?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  officeId?: SortOrder;
  registrationNumber?: SortOrder;
  updatedAt?: SortOrder;
};
