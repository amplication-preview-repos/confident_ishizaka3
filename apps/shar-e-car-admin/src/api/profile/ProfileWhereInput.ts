import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: StringFilter;
  paymentDetails?: JsonFilter;
  profilePic?: JsonFilter;
  rating?: FloatNullableFilter;
  rideHistory?: JsonFilter;
  user?: UserWhereUniqueInput;
};
