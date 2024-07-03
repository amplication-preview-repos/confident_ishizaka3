import { RiderBookingWhereInput } from "./RiderBookingWhereInput";
import { RiderBookingOrderByInput } from "./RiderBookingOrderByInput";

export type RiderBookingFindManyArgs = {
  where?: RiderBookingWhereInput;
  orderBy?: Array<RiderBookingOrderByInput>;
  skip?: number;
  take?: number;
};
