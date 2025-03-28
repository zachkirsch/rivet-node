/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Information about the identity's current game. This is information that all other identities can see about what the current identity is doing.
 */
export interface UpdateIdentityGameActivity {
  /** A short message about the current game activity. */
  message?: string;
  /** JSON data seen by anyone. */
  publicMetadata?: unknown;
  /** JSON data seen only by the given identity and their mutual followers. */
  mutualMetadata?: unknown;
}
