import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { OfficeTitle } from "../office/OfficeTitle";

export const CourierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cars"
          reference="Car"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarTitle} />
        </ReferenceArrayInput>
        <TextInput label="fullNames" source="fullNames" />
        <ReferenceInput source="office.id" reference="Office" label="Office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <TextInput label="password" source="password" />
        <TextInput label="personalNumber" source="personalNumber" />
        <TextInput label="phone" source="phone" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
