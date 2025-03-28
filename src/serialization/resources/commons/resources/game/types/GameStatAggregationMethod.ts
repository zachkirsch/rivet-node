/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GameStatAggregationMethod: core.schemas.Schema<
  serializers.commons.GameStatAggregationMethod.Raw,
  RivetRivet.commons.GameStatAggregationMethod
> = core.schemas.enum_(["sum", "average", "min", "max"]);

export declare namespace GameStatAggregationMethod {
  type Raw = "sum" | "average" | "min" | "max";
}
