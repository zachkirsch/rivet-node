/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GameStatConfig: core.schemas.ObjectSchema<
  serializers.commons.GameStatConfig.Raw,
  RivetRivet.commons.GameStatConfig
> = core.schemas.object({
  recordId: core.schemas.property("record_id", core.schemas.string()),
  iconId: core.schemas.property("icon_id", core.schemas.string()),
  format: core.schemas.lazy(async () => (await import("../../../../..")).commons.GameStatFormatMethod),
  aggregation: core.schemas.lazy(async () => (await import("../../../../..")).commons.GameStatAggregationMethod),
  sorting: core.schemas.lazy(async () => (await import("../../../../..")).commons.GameStatSortingMethod),
  priority: core.schemas.number(),
  displayName: core.schemas.property(
    "display_name",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.DisplayName)
  ),
  postfixSingular: core.schemas.property("postfix_singular", core.schemas.string().optional()),
  postfixPlural: core.schemas.property("postfix_plural", core.schemas.string().optional()),
  prefixSingular: core.schemas.property("prefix_singular", core.schemas.string().optional()),
  prefixPlural: core.schemas.property("prefix_plural", core.schemas.string().optional()),
});

export declare namespace GameStatConfig {
  interface Raw {
    record_id: string;
    icon_id: string;
    format: serializers.commons.GameStatFormatMethod.Raw;
    aggregation: serializers.commons.GameStatAggregationMethod.Raw;
    sorting: serializers.commons.GameStatSortingMethod.Raw;
    priority: number;
    display_name: serializers.commons.DisplayName.Raw;
    postfix_singular?: string | null;
    postfix_plural?: string | null;
    prefix_singular?: string | null;
    prefix_plural?: string | null;
  }
}
