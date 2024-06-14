import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SETTLEMENT_TITLE_FIELD } from "./SettlementTitle";

export const SettlementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="district" source="district" />
        <TextField label="ID" source="id" />
        <TextField label="municipality" source="municipality" />
        <TextField label="name" source="name" />
        <TextField label="postalCode" source="postalCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Office"
          target="settlementId"
          label="Offices"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
