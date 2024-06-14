import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURIER_TITLE_FIELD } from "../courier/CourierTitle";
import { OFFICE_TITLE_FIELD } from "./OfficeTitle";
import { SETTLEMENT_TITLE_FIELD } from "../settlement/SettlementTitle";

export const OfficeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Car" target="officeId" label="Cars">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Courier"
              source="courier.id"
              reference="Courier"
            >
              <TextField source={COURIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="fuelConsumption" source="fuelConsumption" />
            <TextField label="ID" source="id" />
            <TextField label="make" source="make" />
            <TextField label="model" source="model" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="registrationNumber" source="registrationNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Courier"
          target="officeId"
          label="Couriers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fullNames" source="fullNames" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="password" source="password" />
            <TextField label="personalNumber" source="personalNumber" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
