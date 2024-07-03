import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RiderBookingService } from "./riderBooking.service";
import { RiderBookingControllerBase } from "./base/riderBooking.controller.base";

@swagger.ApiTags("riderBookings")
@common.Controller("riderBookings")
export class RiderBookingController extends RiderBookingControllerBase {
  constructor(
    protected readonly service: RiderBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
