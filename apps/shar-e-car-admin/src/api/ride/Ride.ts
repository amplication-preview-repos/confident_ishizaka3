import { RiderBooking } from "../riderBooking/RiderBooking";

export type Ride = {
  createdAt: Date;
  destination: string | null;
  driver: string | null;
  id: string;
  location: string | null;
  passengers: number | null;
  price: number | null;
  riderBookings?: Array<RiderBooking>;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
};
