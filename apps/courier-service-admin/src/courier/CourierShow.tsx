import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURIER_TITLE_FIELD } from "./CourierTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";

export const CourierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fullNames" source="fullNames" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Office" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="password" source="password" />
        <TextField label="personalNumber" source="personalNumber" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField reference="Car" target="courierId" label="Cars">
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
      </SimpleShowLayout>
    </Show>
  );
};
