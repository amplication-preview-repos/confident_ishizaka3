/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RiderBookingWhereUniqueInput } from "./RiderBookingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RiderBookingUpdateInput } from "./RiderBookingUpdateInput";

@ArgsType()
class UpdateRiderBookingArgs {
  @ApiProperty({
    required: true,
    type: () => RiderBookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RiderBookingWhereUniqueInput)
  @Field(() => RiderBookingWhereUniqueInput, { nullable: false })
  where!: RiderBookingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RiderBookingUpdateInput,
  })
  @ValidateNested()
  @Type(() => RiderBookingUpdateInput)
  @Field(() => RiderBookingUpdateInput, { nullable: false })
  data!: RiderBookingUpdateInput;
}

export { UpdateRiderBookingArgs as UpdateRiderBookingArgs };
