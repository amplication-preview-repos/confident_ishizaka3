import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RiderBookingResolverBase } from "./base/riderBooking.resolver.base";
import { RiderBooking } from "./base/RiderBooking";
import { RiderBookingService } from "./riderBooking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RiderBooking)
export class RiderBookingResolver extends RiderBookingResolverBase {
  constructor(
    protected readonly service: RiderBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
