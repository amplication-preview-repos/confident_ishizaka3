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

import { RIDE_TITLE_FIELD } from "./RideTitle";

export const RideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destination" source="destination" />
        <TextField label="driver" source="driver" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="passengers" source="passengers" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RiderBooking"
          target="rideId"
          label="RiderBookings"
        >
          <Datagrid rowClick="show">
            <TextField label="bookingTime" source="bookingTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <ReferenceField label="ride" source="ride.id" reference="Ride">
              <TextField source={RIDE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rider" source="rider" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
