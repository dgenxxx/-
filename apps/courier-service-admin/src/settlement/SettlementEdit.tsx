import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OfficeTitle } from "../office/OfficeTitle";

export const SettlementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="district" source="district" />
        <TextInput label="municipality" source="municipality" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="offices"
          reference="Office"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OfficeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="postalCode" source="postalCode" />
      </SimpleForm>
    </Edit>
  );
};
