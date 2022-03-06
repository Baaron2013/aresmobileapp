import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Workouts {
  readonly id: string;
  readonly program?: string;
  readonly level?: string;
  readonly week?: string;
  readonly day?: string;
  readonly numOfCompletions?: string;
  readonly workoutName?: string;
  readonly weekCompleted?: boolean;
  readonly userID: string;
  constructor(init: ModelInit<Workouts>);
  static copyOf(source: Workouts, mutator: (draft: MutableModel<Workouts>) => MutableModel<Workouts> | void): Workouts;
}

export declare class CalculatorResults {
  readonly id: string;
  readonly clean?: number;
  readonly bench?: number;
  readonly squat?: number;
  readonly level?: string;
  readonly userID: string;
  readonly levelID?: number;
  constructor(init: ModelInit<CalculatorResults>);
  static copyOf(source: CalculatorResults, mutator: (draft: MutableModel<CalculatorResults>) => MutableModel<CalculatorResults> | void): CalculatorResults;
}

export declare class Chatroom {
  readonly id: string;
  readonly newMessages: number;
  readonly LastMessage?: Message;
  readonly Messages?: (Message | null)[];
  readonly ChatroomUsers?: (ChatroomUser | null)[];
  constructor(init: ModelInit<Chatroom>);
  static copyOf(source: Chatroom, mutator: (draft: MutableModel<Chatroom>) => MutableModel<Chatroom> | void): Chatroom;
}

export declare class Message {
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class ChatroomUser {
  readonly id: string;
  readonly chatroom: Chatroom;
  readonly user: User;
  constructor(init: ModelInit<ChatroomUser>);
  static copyOf(source: ChatroomUser, mutator: (draft: MutableModel<ChatroomUser>) => MutableModel<ChatroomUser> | void): ChatroomUser;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly type: string;
  readonly imageUri?: string;
  readonly status?: string;
  readonly Messages?: (Message | null)[];
  readonly chatrooms?: (ChatroomUser | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

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