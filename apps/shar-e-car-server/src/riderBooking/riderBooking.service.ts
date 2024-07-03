import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiderBookingServiceBase } from "./base/riderBooking.service.base";

@Injectable()
export class RiderBookingService extends RiderBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
