import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RiderBookingListRelationFilter } from "../riderBooking/RiderBookingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RideWhereInput = {
  destination?: StringNullableFilter;
  driver?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  passengers?: IntNullableFilter;
  price?: FloatNullableFilter;
  riderBookings?: RiderBookingListRelationFilter;
  status?: "Option1";
  time?: DateTimeNullableFilter;
};
