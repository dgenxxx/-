import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SETTLEMENT_TITLE_FIELD } from "../settlement/SettlementTitle";

export const OfficeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Offices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="hoursOfOperation" source="hoursOfOperation" />
        <TextField label="ID" source="id" />
        <TextField label="manager" source="manager" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <ReferenceField
          label="Settlement"
          source="settlement.id"
          reference="Settlement"
        >
          <TextField source={SETTLEMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
