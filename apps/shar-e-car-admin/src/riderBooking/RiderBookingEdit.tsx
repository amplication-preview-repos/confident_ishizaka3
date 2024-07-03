import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";

export const RiderBookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingTime" source="bookingTime" />
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="ride.id" reference="Ride" label="ride">
          <SelectInput optionText={RideTitle} />
        </ReferenceInput>
        <TextInput label="rider" source="rider" />
      </SimpleForm>
    </Edit>
  );
};
