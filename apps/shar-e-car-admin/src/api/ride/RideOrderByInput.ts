import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  destination?: SortOrder;
  driver?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  passengers?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
