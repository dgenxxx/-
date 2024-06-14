import { Car } from "../car/Car";
import { Courier } from "../courier/Courier";
import { Settlement } from "../settlement/Settlement";

export type Office = {
  address: string | null;
  cars?: Array<Car>;
  couriers?: Array<Courier>;
  createdAt: Date;
  hoursOfOperation: string | null;
  id: string;
  manager: string | null;
  name: string | null;
  phone: string | null;
  settlement?: Settlement | null;
  updatedAt: Date;
};
