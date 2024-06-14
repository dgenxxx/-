import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OfficeTitle } from "../office/OfficeTitle";

export const SettlementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
