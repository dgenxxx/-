import { Courier } from "../courier/Courier";
import { Office } from "../office/Office";

export type Car = {
  courier?: Courier | null;
  createdAt: Date;
  fuelConsumption: number | null;
  id: string;
  make: string | null;
  model: string | null;
  office?: Office | null;
  registrationNumber: string | null;
  updatedAt: Date;
};
