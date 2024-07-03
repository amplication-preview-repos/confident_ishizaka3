import { SortOrder } from "../../util/SortOrder";

export type RiderBookingOrderByInput = {
  bookingTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  rideId?: SortOrder;
  rider?: SortOrder;
  updatedAt?: SortOrder;
};
