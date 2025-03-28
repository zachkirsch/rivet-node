/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as IdentityClient } from "./api/resources/identity/client/Client";

export declare namespace RivetRivetClient {
  interface Options {
    environment?: environments.RivetRivetEnvironment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class RivetRivetClient {
  constructor(private readonly options: RivetRivetClient.Options) {}

  #identity: IdentityClient | undefined;

  public get identity(): IdentityClient {
    return (this.#identity ??= new IdentityClient(this.options));
  }
}
