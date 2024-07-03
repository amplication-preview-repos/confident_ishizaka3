import { RiderBookingUpdateManyWithoutRidesInput } from "./RiderBookingUpdateManyWithoutRidesInput";

export type RideUpdateInput = {
  destination?: string | null;
  driver?: string | null;
  location?: string | null;
  passengers?: number | null;
  price?: number | null;
  riderBookings?: RiderBookingUpdateManyWithoutRidesInput;
  status?: "Option1" | null;
  time?: Date | null;
};
