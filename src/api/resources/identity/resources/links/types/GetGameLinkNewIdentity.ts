/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

export interface GetGameLinkNewIdentity {
  identityToken: RivetRivet.commons.Jwt;
  identityTokenExpireTs: RivetRivet.commons.Timestamp;
  identity: RivetRivet.commons.IdentityProfile;
}
