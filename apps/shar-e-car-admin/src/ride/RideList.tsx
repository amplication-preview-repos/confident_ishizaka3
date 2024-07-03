import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RideList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rides"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
