/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

export interface MatchmakerLobbyJoinInfoPort {
  /**
   * The host for the given port. Will be null if using a port range.
   *
   */
  host?: string;
  hostname: string;
  /**
   * The port number for this lobby. Will be null if using a port range.
   *
   */
  port?: number;
  /**
   * Whether or not this lobby port uses TLS. You cannot mix a non-TLS and TLS ports.
   *
   */
  portRange: RivetRivet.commons.MatchmakerLobbyJoinInfoPortRange;
  isTls: boolean;
}
