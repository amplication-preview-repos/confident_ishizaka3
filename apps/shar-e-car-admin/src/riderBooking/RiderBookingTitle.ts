import { RiderBooking as TRiderBooking } from "../api/riderBooking/RiderBooking";

export const RIDERBOOKING_TITLE_FIELD = "rider";

export const RiderBookingTitle = (record: TRiderBooking): string => {
  return record.rider?.toString() || String(record.id);
};
