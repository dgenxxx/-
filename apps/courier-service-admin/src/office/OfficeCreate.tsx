import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { CourierTitle } from "../courier/CourierTitle";
import { SettlementTitle } from "../settlement/SettlementTitle";

export const OfficeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="cars"
          reference="Car"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="couriers"
          reference="Courier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourierTitle} />
        </ReferenceArrayInput>
        <TextInput label="hoursOfOperation" source="hoursOfOperation" />
        <TextInput label="manager" source="manager" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <ReferenceInput
          source="settlement.id"
          reference="Settlement"
          label="Settlement"
        >
          <SelectInput optionText={SettlementTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
