/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

export interface GroupSummary {
  groupId: string;
  dispayName: RivetRivet.commons.DisplayName;
  /** The URL of this group's avatar image. */
  avatarUrl?: string;
  external: RivetRivet.commons.GroupExternalLinks;
  /** Whether or not this group is a developer. */
  isDeveloper: boolean;
  bio: RivetRivet.commons.Bio;
  /** Whether or not the current identity is a member of this group. */
  isCurrentlyIdentityMember: boolean;
  publicity: RivetRivet.commons.GroupPublicity;
  memberCount: number;
}
