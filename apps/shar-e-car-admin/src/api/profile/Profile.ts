import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  createdAt: Date;
  id: string;
  paymentDetails: JsonValue;
  profilePic: JsonValue;
  rating: number | null;
  rideHistory: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
