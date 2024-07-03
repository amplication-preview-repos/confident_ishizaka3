import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { RiderBookingTitle } from "../riderBooking/RiderBookingTitle";

export const RideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="destination" source="destination" />
        <TextInput label="driver" source="driver" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="passengers" source="passengers" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="riderBookings"
          reference="RiderBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RiderBookingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
