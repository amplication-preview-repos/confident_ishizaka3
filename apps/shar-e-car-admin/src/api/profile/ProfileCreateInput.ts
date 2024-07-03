import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  paymentDetails?: InputJsonValue;
  profilePic?: InputJsonValue;
  rating?: number | null;
  rideHistory?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
