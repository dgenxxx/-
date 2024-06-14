import { Car } from "../car/Car";
import { Office } from "../office/Office";

export type Courier = {
  cars?: Array<Car>;
  createdAt: Date;
  fullNames: string | null;
  id: string;
  office?: Office | null;
  password: string | null;
  personalNumber: string | null;
  phone: string | null;
  updatedAt: Date;
  username: string | null;
};
