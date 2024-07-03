import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RIDE_TITLE_FIELD } from "../ride/RideTitle";

export const RiderBookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RiderBookings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
