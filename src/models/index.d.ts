import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RangerMetrics {
  readonly id: string;
  readonly weight?: number;
  readonly sleep?: string;
  readonly willingness?: string;
  readonly appetite?: string;
  readonly soreness?: string;
  readonly userID: string;
  constructor(init: ModelInit<RangerMetrics>);
  static copyOf(source: RangerMetrics, mutator: (draft: MutableModel<RangerMetrics>) => MutableModel<RangerMetrics> | void): RangerMetrics;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly type: string;
  readonly imageUri?: string;
  readonly status?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}