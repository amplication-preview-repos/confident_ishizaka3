import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RiderBookingWhereInput = {
  bookingTime?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  ride?: RideWhereUniqueInput;
  rider?: StringNullableFilter;
};
