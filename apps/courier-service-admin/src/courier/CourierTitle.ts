import { Courier as TCourier } from "../api/courier/Courier";

export const COURIER_TITLE_FIELD = "fullNames";

export const CourierTitle = (record: TCourier): string => {
  return record.fullNames?.toString() || String(record.id);
};
