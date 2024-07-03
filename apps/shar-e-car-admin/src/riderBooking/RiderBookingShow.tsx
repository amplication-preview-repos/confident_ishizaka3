import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RIDE_TITLE_FIELD } from "../ride/RideTitle";

export const RiderBookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bookingTime" source="bookingTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <ReferenceField label="ride" source="ride.id" reference="Ride">
          <TextField source={RIDE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rider" source="rider" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
