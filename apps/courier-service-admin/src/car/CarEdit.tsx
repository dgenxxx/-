import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CourierTitle } from "../courier/CourierTitle";
import { OfficeTitle } from "../office/OfficeTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="courier.id" reference="Courier" label="Courier">
          <SelectInput optionText={CourierTitle} />
        </ReferenceInput>
        <NumberInput label="fuelConsumption" source="fuelConsumption" />
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <ReferenceInput source="office.id" reference="Office" label="Office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <TextInput label="registrationNumber" source="registrationNumber" />
      </SimpleForm>
    </Edit>
  );
};
