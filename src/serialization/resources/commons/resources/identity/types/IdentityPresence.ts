/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityPresence: core.schemas.ObjectSchema<
  serializers.commons.IdentityPresence.Raw,
  RivetRivet.commons.IdentityPresence
> = core.schemas.object({
  updateTs: core.schemas.property("update_ts", core.schemas.date()),
  status: core.schemas.lazy(async () => (await import("../../../../..")).commons.IdentityStatus),
  gameActivity: core.schemas.property(
    "game_activity",
    core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityGameActivity).optional()
  ),
});

export declare namespace IdentityPresence {
  interface Raw {
    update_ts: string;
    status: serializers.commons.IdentityStatus.Raw;
    game_activity?: serializers.commons.IdentityGameActivity.Raw | null;
  }
}
