import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentDetails?: SortOrder;
  profilePic?: SortOrder;
  rating?: SortOrder;
  rideHistory?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
