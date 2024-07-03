import { RiderBookingCreateNestedManyWithoutRidesInput } from "./RiderBookingCreateNestedManyWithoutRidesInput";

export type RideCreateInput = {
  destination?: string | null;
  driver?: string | null;
  location?: string | null;
  passengers?: number | null;
  price?: number | null;
  riderBookings?: RiderBookingCreateNestedManyWithoutRidesInput;
  status?: "Option1" | null;
  time?: Date | null;
};
