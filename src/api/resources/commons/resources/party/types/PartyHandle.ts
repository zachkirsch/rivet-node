/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

export interface PartyHandle {
  partyId: string;
  createTs: Date;
  activity: RivetRivet.commons.PartyActivity;
  external: RivetRivet.commons.PartyExternalLinks;
}
