import { Settlement as TSettlement } from "../api/settlement/Settlement";

export const SETTLEMENT_TITLE_FIELD = "name";

export const SettlementTitle = (record: TSettlement): string => {
  return record.name?.toString() || String(record.id);
};
