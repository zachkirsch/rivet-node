/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const PartyActivityMatchmakerFindingLobby: core.schemas.ObjectSchema<
  serializers.commons.PartyActivityMatchmakerFindingLobby.Raw,
  RivetRivet.commons.PartyActivityMatchmakerFindingLobby
> = core.schemas.object({
  game: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.GameHandle),
});

export declare namespace PartyActivityMatchmakerFindingLobby {
  interface Raw {
    game: serializers.commons.GameHandle.Raw;
  }
}
