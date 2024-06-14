import { Office } from "../office/Office";

export type Settlement = {
  createdAt: Date;
  district: string | null;
  id: string;
  municipality: string | null;
  name: string | null;
  offices?: Array<Office>;
  postalCode: number | null;
  updatedAt: Date;
};
