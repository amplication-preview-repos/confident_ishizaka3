import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RiderBookingModuleBase } from "./base/riderBooking.module.base";
import { RiderBookingService } from "./riderBooking.service";
import { RiderBookingController } from "./riderBooking.controller";
import { RiderBookingResolver } from "./riderBooking.resolver";

@Module({
  imports: [RiderBookingModuleBase, forwardRef(() => AuthModule)],
  controllers: [RiderBookingController],
  providers: [RiderBookingService, RiderBookingResolver],
  exports: [RiderBookingService],
})
export class RiderBookingModule {}
