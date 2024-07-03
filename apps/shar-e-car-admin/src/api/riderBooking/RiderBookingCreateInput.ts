import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type RiderBookingCreateInput = {
  bookingTime?: Date | null;
  paymentMethod?: "Option1" | null;
  ride?: RideWhereUniqueInput | null;
  rider?: string | null;
};
