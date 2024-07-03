import { Ride } from "../ride/Ride";

export type RiderBooking = {
  bookingTime: Date | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  ride?: Ride | null;
  rider: string | null;
  updatedAt: Date;
};
