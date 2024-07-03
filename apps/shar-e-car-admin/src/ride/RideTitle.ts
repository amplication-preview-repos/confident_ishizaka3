import { Ride as TRide } from "../api/ride/Ride";

export const RIDE_TITLE_FIELD = "destination";

export const RideTitle = (record: TRide): string => {
  return record.destination?.toString() || String(record.id);
};
