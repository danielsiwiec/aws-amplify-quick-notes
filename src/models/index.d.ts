import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Geo {
  readonly lat: number;
  readonly long: number;
  constructor(init: ModelInit<Geo>);
}

export declare class Location {
  readonly id: string;
  readonly name: string;
  readonly geo: Geo;
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}