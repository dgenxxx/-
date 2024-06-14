import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SettlementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Settlements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="district" source="district" />
        <TextField label="ID" source="id" />
        <TextField label="municipality" source="municipality" />
        <TextField label="name" source="name" />
        <TextField label="postalCode" source="postalCode" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
