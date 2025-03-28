/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityExternalLinks: core.schemas.ObjectSchema<
  serializers.commons.IdentityExternalLinks.Raw,
  RivetRivet.commons.IdentityExternalLinks
> = core.schemas.object({
  profile: core.schemas.string(),
  settings: core.schemas.string().optional(),
  chat: core.schemas.string().optional(),
});

export declare namespace IdentityExternalLinks {
  interface Raw {
    profile: string;
    settings?: string | null;
    chat?: string | null;
  }
}
