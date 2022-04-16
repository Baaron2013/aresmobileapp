/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatroomInput = {
  id?: string | null,
  newMessages: number,
  Chatters?: Array< string | null > | null,
  _version?: number | null,
  chatroomLastMessageId?: string | null,
};

export type ModelChatroomConditionInput = {
  newMessages?: ModelIntInput | null,
  Chatters?: ModelStringInput | null,
  and?: Array< ModelChatroomConditionInput | null > | null,
  or?: Array< ModelChatroomConditionInput | null > | null,
  not?: ModelChatroomConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Chatroom = {
  __typename: "Chatroom",
  id?: string,
  newMessages?: number,
  Chatters?: Array< string | null > | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  LastMessage?: Message,
  Messages?: ModelMessageConnection,
  ChatroomUsers?: ModelChatroomUserConnection,
};

export type Message = {
  __typename: "Message",
  id?: string,
  content?: string,
  userID?: string,
  chatroomID?: string,
  isRead?: boolean,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChatroomUserConnection = {
  __typename: "ModelChatroomUserConnection",
  items?:  Array<ChatroomUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ChatroomUser = {
  __typename: "ChatroomUser",
  id?: string,
  chatroomID?: string,
  userID?: string,
  newMessages?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  chatroom?: Chatroom,
  user?: User,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  email?: string,
  type?: string,
  imageUri?: string | null,
  status?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  Messages?: ModelMessageConnection,
  chatrooms?: ModelChatroomUserConnection,
};

export type UpdateChatroomInput = {
  id: string,
  newMessages?: number | null,
  Chatters?: Array< string | null > | null,
  _version?: number | null,
  chatroomLastMessageId?: string | null,
};

export type DeleteChatroomInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkoutsInput = {
  id?: string | null,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  numOfCompletions?: string | null,
  workoutName?: string | null,
  weekCompleted?: boolean | null,
  userID: string,
  _version?: number | null,
};

export type ModelWorkoutsConditionInput = {
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  day?: ModelStringInput | null,
  numOfCompletions?: ModelStringInput | null,
  workoutName?: ModelStringInput | null,
  weekCompleted?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWorkoutsConditionInput | null > | null,
  or?: Array< ModelWorkoutsConditionInput | null > | null,
  not?: ModelWorkoutsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Workouts = {
  __typename: "Workouts",
  id?: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  numOfCompletions?: string | null,
  workoutName?: string | null,
  weekCompleted?: boolean | null,
  userID?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateWorkoutsInput = {
  id: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  numOfCompletions?: string | null,
  workoutName?: string | null,
  weekCompleted?: boolean | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteWorkoutsInput = {
  id: string,
  _version?: number | null,
};

export type CreateWeeksCompletedInput = {
  id?: string | null,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelWeeksCompletedConditionInput = {
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWeeksCompletedConditionInput | null > | null,
  or?: Array< ModelWeeksCompletedConditionInput | null > | null,
  not?: ModelWeeksCompletedConditionInput | null,
};

export type WeeksCompleted = {
  __typename: "WeeksCompleted",
  id?: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  userID?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateWeeksCompletedInput = {
  id: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteWeeksCompletedInput = {
  id: string,
  _version?: number | null,
};

export type CreateTrainingLogsInput = {
  id?: string | null,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  description?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelTrainingLogsConditionInput = {
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  day?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTrainingLogsConditionInput | null > | null,
  or?: Array< ModelTrainingLogsConditionInput | null > | null,
  not?: ModelTrainingLogsConditionInput | null,
};

export type TrainingLogs = {
  __typename: "TrainingLogs",
  id?: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  description?: string | null,
  userID?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTrainingLogsInput = {
  id: string,
  program?: string | null,
  level?: string | null,
  week?: string | null,
  day?: string | null,
  description?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteTrainingLogsInput = {
  id: string,
  _version?: number | null,
};

export type CreateCalculatorResultsInput = {
  id?: string | null,
  clean?: number | null,
  bench?: number | null,
  squat?: number | null,
  level?: string | null,
  userID: string,
  levelID?: number | null,
  _version?: number | null,
};

export type ModelCalculatorResultsConditionInput = {
  clean?: ModelIntInput | null,
  bench?: ModelIntInput | null,
  squat?: ModelIntInput | null,
  level?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  levelID?: ModelIntInput | null,
  and?: Array< ModelCalculatorResultsConditionInput | null > | null,
  or?: Array< ModelCalculatorResultsConditionInput | null > | null,
  not?: ModelCalculatorResultsConditionInput | null,
};

export type CalculatorResults = {
  __typename: "CalculatorResults",
  id?: string,
  clean?: number | null,
  bench?: number | null,
  squat?: number | null,
  level?: string | null,
  userID?: string,
  levelID?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateCalculatorResultsInput = {
  id: string,
  clean?: number | null,
  bench?: number | null,
  squat?: number | null,
  level?: string | null,
  userID?: string | null,
  levelID?: number | null,
  _version?: number | null,
};

export type DeleteCalculatorResultsInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  userID: string,
  chatroomID: string,
  isRead: boolean,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  userID?: string | null,
  chatroomID?: string | null,
  isRead?: boolean | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateRangerMetricsInput = {
  id?: string | null,
  weight?: number | null,
  sleep?: string | null,
  willingness?: string | null,
  appetite?: string | null,
  soreness?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelRangerMetricsConditionInput = {
  weight?: ModelIntInput | null,
  sleep?: ModelStringInput | null,
  willingness?: ModelStringInput | null,
  appetite?: ModelStringInput | null,
  soreness?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelRangerMetricsConditionInput | null > | null,
  or?: Array< ModelRangerMetricsConditionInput | null > | null,
  not?: ModelRangerMetricsConditionInput | null,
};

export type RangerMetrics = {
  __typename: "RangerMetrics",
  id?: string,
  weight?: number | null,
  sleep?: string | null,
  willingness?: string | null,
  appetite?: string | null,
  soreness?: string | null,
  userID?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateRangerMetricsInput = {
  id: string,
  weight?: number | null,
  sleep?: string | null,
  willingness?: string | null,
  appetite?: string | null,
  soreness?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteRangerMetricsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  type: string,
  imageUri?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  type?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  type?: string | null,
  imageUri?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatroomUserInput = {
  id?: string | null,
  chatroomID: string,
  userID: string,
  newMessages?: number | null,
  _version?: number | null,
};

export type ModelChatroomUserConditionInput = {
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  newMessages?: ModelIntInput | null,
  and?: Array< ModelChatroomUserConditionInput | null > | null,
  or?: Array< ModelChatroomUserConditionInput | null > | null,
  not?: ModelChatroomUserConditionInput | null,
};

export type UpdateChatroomUserInput = {
  id: string,
  chatroomID?: string | null,
  userID?: string | null,
  newMessages?: number | null,
  _version?: number | null,
};

export type DeleteChatroomUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelChatroomFilterInput = {
  id?: ModelIDInput | null,
  newMessages?: ModelIntInput | null,
  Chatters?: ModelStringInput | null,
  and?: Array< ModelChatroomFilterInput | null > | null,
  or?: Array< ModelChatroomFilterInput | null > | null,
  not?: ModelChatroomFilterInput | null,
};

export type ModelChatroomConnection = {
  __typename: "ModelChatroomConnection",
  items?:  Array<Chatroom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkoutsFilterInput = {
  id?: ModelIDInput | null,
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  day?: ModelStringInput | null,
  numOfCompletions?: ModelStringInput | null,
  workoutName?: ModelStringInput | null,
  weekCompleted?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWorkoutsFilterInput | null > | null,
  or?: Array< ModelWorkoutsFilterInput | null > | null,
  not?: ModelWorkoutsFilterInput | null,
};

export type ModelWorkoutsConnection = {
  __typename: "ModelWorkoutsConnection",
  items?:  Array<Workouts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWeeksCompletedFilterInput = {
  id?: ModelIDInput | null,
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWeeksCompletedFilterInput | null > | null,
  or?: Array< ModelWeeksCompletedFilterInput | null > | null,
  not?: ModelWeeksCompletedFilterInput | null,
};

export type ModelWeeksCompletedConnection = {
  __typename: "ModelWeeksCompletedConnection",
  items?:  Array<WeeksCompleted | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTrainingLogsFilterInput = {
  id?: ModelIDInput | null,
  program?: ModelStringInput | null,
  level?: ModelStringInput | null,
  week?: ModelStringInput | null,
  day?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTrainingLogsFilterInput | null > | null,
  or?: Array< ModelTrainingLogsFilterInput | null > | null,
  not?: ModelTrainingLogsFilterInput | null,
};

export type ModelTrainingLogsConnection = {
  __typename: "ModelTrainingLogsConnection",
  items?:  Array<TrainingLogs | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCalculatorResultsFilterInput = {
  id?: ModelIDInput | null,
  clean?: ModelIntInput | null,
  bench?: ModelIntInput | null,
  squat?: ModelIntInput | null,
  level?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  levelID?: ModelIntInput | null,
  and?: Array< ModelCalculatorResultsFilterInput | null > | null,
  or?: Array< ModelCalculatorResultsFilterInput | null > | null,
  not?: ModelCalculatorResultsFilterInput | null,
};

export type ModelCalculatorResultsConnection = {
  __typename: "ModelCalculatorResultsConnection",
  items?:  Array<CalculatorResults | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelRangerMetricsFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelIntInput | null,
  sleep?: ModelStringInput | null,
  willingness?: ModelStringInput | null,
  appetite?: ModelStringInput | null,
  soreness?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelRangerMetricsFilterInput | null > | null,
  or?: Array< ModelRangerMetricsFilterInput | null > | null,
  not?: ModelRangerMetricsFilterInput | null,
};

export type ModelRangerMetricsConnection = {
  __typename: "ModelRangerMetricsConnection",
  items?:  Array<RangerMetrics | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  type?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChatroomUserFilterInput = {
  id?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  newMessages?: ModelIntInput | null,
  and?: Array< ModelChatroomUserFilterInput | null > | null,
  or?: Array< ModelChatroomUserFilterInput | null > | null,
  not?: ModelChatroomUserFilterInput | null,
};

export type CreateChatroomMutationVariables = {
  input?: CreateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type CreateChatroomMutation = {
  createChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateChatroomMutationVariables = {
  input?: UpdateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type UpdateChatroomMutation = {
  updateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteChatroomMutationVariables = {
  input?: DeleteChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type DeleteChatroomMutation = {
  deleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateWorkoutsMutationVariables = {
  input?: CreateWorkoutsInput,
  condition?: ModelWorkoutsConditionInput | null,
};

export type CreateWorkoutsMutation = {
  createWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutsMutationVariables = {
  input?: UpdateWorkoutsInput,
  condition?: ModelWorkoutsConditionInput | null,
};

export type UpdateWorkoutsMutation = {
  updateWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutsMutationVariables = {
  input?: DeleteWorkoutsInput,
  condition?: ModelWorkoutsConditionInput | null,
};

export type DeleteWorkoutsMutation = {
  deleteWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWeeksCompletedMutationVariables = {
  input?: CreateWeeksCompletedInput,
  condition?: ModelWeeksCompletedConditionInput | null,
};

export type CreateWeeksCompletedMutation = {
  createWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWeeksCompletedMutationVariables = {
  input?: UpdateWeeksCompletedInput,
  condition?: ModelWeeksCompletedConditionInput | null,
};

export type UpdateWeeksCompletedMutation = {
  updateWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWeeksCompletedMutationVariables = {
  input?: DeleteWeeksCompletedInput,
  condition?: ModelWeeksCompletedConditionInput | null,
};

export type DeleteWeeksCompletedMutation = {
  deleteWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTrainingLogsMutationVariables = {
  input?: CreateTrainingLogsInput,
  condition?: ModelTrainingLogsConditionInput | null,
};

export type CreateTrainingLogsMutation = {
  createTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTrainingLogsMutationVariables = {
  input?: UpdateTrainingLogsInput,
  condition?: ModelTrainingLogsConditionInput | null,
};

export type UpdateTrainingLogsMutation = {
  updateTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTrainingLogsMutationVariables = {
  input?: DeleteTrainingLogsInput,
  condition?: ModelTrainingLogsConditionInput | null,
};

export type DeleteTrainingLogsMutation = {
  deleteTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCalculatorResultsMutationVariables = {
  input?: CreateCalculatorResultsInput,
  condition?: ModelCalculatorResultsConditionInput | null,
};

export type CreateCalculatorResultsMutation = {
  createCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCalculatorResultsMutationVariables = {
  input?: UpdateCalculatorResultsInput,
  condition?: ModelCalculatorResultsConditionInput | null,
};

export type UpdateCalculatorResultsMutation = {
  updateCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCalculatorResultsMutationVariables = {
  input?: DeleteCalculatorResultsInput,
  condition?: ModelCalculatorResultsConditionInput | null,
};

export type DeleteCalculatorResultsMutation = {
  deleteCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRangerMetricsMutationVariables = {
  input?: CreateRangerMetricsInput,
  condition?: ModelRangerMetricsConditionInput | null,
};

export type CreateRangerMetricsMutation = {
  createRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRangerMetricsMutationVariables = {
  input?: UpdateRangerMetricsInput,
  condition?: ModelRangerMetricsConditionInput | null,
};

export type UpdateRangerMetricsMutation = {
  updateRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRangerMetricsMutationVariables = {
  input?: DeleteRangerMetricsInput,
  condition?: ModelRangerMetricsConditionInput | null,
};

export type DeleteRangerMetricsMutation = {
  deleteRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateChatroomUserMutationVariables = {
  input?: CreateChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type CreateChatroomUserMutation = {
  createChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type UpdateChatroomUserMutationVariables = {
  input?: UpdateChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type UpdateChatroomUserMutation = {
  updateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type DeleteChatroomUserMutationVariables = {
  input?: DeleteChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type DeleteChatroomUserMutation = {
  deleteChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type GetChatroomQueryVariables = {
  id?: string,
};

export type GetChatroomQuery = {
  getChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListChatroomsQueryVariables = {
  filter?: ModelChatroomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatroomsQuery = {
  listChatrooms?:  {
    __typename: "ModelChatroomConnection",
    items:  Array< {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatroomsQueryVariables = {
  filter?: ModelChatroomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatroomsQuery = {
  syncChatrooms?:  {
    __typename: "ModelChatroomConnection",
    items:  Array< {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkoutsQueryVariables = {
  id?: string,
};

export type GetWorkoutsQuery = {
  getWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutssQueryVariables = {
  filter?: ModelWorkoutsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutssQuery = {
  listWorkoutss?:  {
    __typename: "ModelWorkoutsConnection",
    items:  Array< {
      __typename: "Workouts",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      day?: string | null,
      numOfCompletions?: string | null,
      workoutName?: string | null,
      weekCompleted?: boolean | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkoutsQueryVariables = {
  filter?: ModelWorkoutsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkoutsQuery = {
  syncWorkouts?:  {
    __typename: "ModelWorkoutsConnection",
    items:  Array< {
      __typename: "Workouts",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      day?: string | null,
      numOfCompletions?: string | null,
      workoutName?: string | null,
      weekCompleted?: boolean | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWeeksCompletedQueryVariables = {
  id?: string,
};

export type GetWeeksCompletedQuery = {
  getWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWeeksCompletedsQueryVariables = {
  filter?: ModelWeeksCompletedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeeksCompletedsQuery = {
  listWeeksCompleteds?:  {
    __typename: "ModelWeeksCompletedConnection",
    items:  Array< {
      __typename: "WeeksCompleted",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWeeksCompletedsQueryVariables = {
  filter?: ModelWeeksCompletedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWeeksCompletedsQuery = {
  syncWeeksCompleteds?:  {
    __typename: "ModelWeeksCompletedConnection",
    items:  Array< {
      __typename: "WeeksCompleted",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTrainingLogsQueryVariables = {
  id?: string,
};

export type GetTrainingLogsQuery = {
  getTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTrainingLogssQueryVariables = {
  filter?: ModelTrainingLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrainingLogssQuery = {
  listTrainingLogss?:  {
    __typename: "ModelTrainingLogsConnection",
    items:  Array< {
      __typename: "TrainingLogs",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      day?: string | null,
      description?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTrainingLogsQueryVariables = {
  filter?: ModelTrainingLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTrainingLogsQuery = {
  syncTrainingLogs?:  {
    __typename: "ModelTrainingLogsConnection",
    items:  Array< {
      __typename: "TrainingLogs",
      id: string,
      program?: string | null,
      level?: string | null,
      week?: string | null,
      day?: string | null,
      description?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCalculatorResultsQueryVariables = {
  id?: string,
};

export type GetCalculatorResultsQuery = {
  getCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCalculatorResultssQueryVariables = {
  filter?: ModelCalculatorResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalculatorResultssQuery = {
  listCalculatorResultss?:  {
    __typename: "ModelCalculatorResultsConnection",
    items:  Array< {
      __typename: "CalculatorResults",
      id: string,
      clean?: number | null,
      bench?: number | null,
      squat?: number | null,
      level?: string | null,
      userID: string,
      levelID?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCalculatorResultsQueryVariables = {
  filter?: ModelCalculatorResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCalculatorResultsQuery = {
  syncCalculatorResults?:  {
    __typename: "ModelCalculatorResultsConnection",
    items:  Array< {
      __typename: "CalculatorResults",
      id: string,
      clean?: number | null,
      bench?: number | null,
      squat?: number | null,
      level?: string | null,
      userID: string,
      levelID?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id?: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRangerMetricsQueryVariables = {
  id?: string,
};

export type GetRangerMetricsQuery = {
  getRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRangerMetricssQueryVariables = {
  filter?: ModelRangerMetricsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRangerMetricssQuery = {
  listRangerMetricss?:  {
    __typename: "ModelRangerMetricsConnection",
    items:  Array< {
      __typename: "RangerMetrics",
      id: string,
      weight?: number | null,
      sleep?: string | null,
      willingness?: string | null,
      appetite?: string | null,
      soreness?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRangerMetricsQueryVariables = {
  filter?: ModelRangerMetricsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRangerMetricsQuery = {
  syncRangerMetrics?:  {
    __typename: "ModelRangerMetricsConnection",
    items:  Array< {
      __typename: "RangerMetrics",
      id: string,
      weight?: number | null,
      sleep?: string | null,
      willingness?: string | null,
      appetite?: string | null,
      soreness?: string | null,
      userID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatroomUserQueryVariables = {
  id?: string,
};

export type GetChatroomUserQuery = {
  getChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type ListChatroomUsersQueryVariables = {
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatroomUsersQuery = {
  listChatroomUsers?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      chatroomID: string,
      userID: string,
      newMessages?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      chatroom:  {
        __typename: "Chatroom",
        id: string,
        newMessages: number,
        Chatters?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        type: string,
        imageUri?: string | null,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatroomUsersQueryVariables = {
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatroomUsersQuery = {
  syncChatroomUsers?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      chatroomID: string,
      userID: string,
      newMessages?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      chatroom:  {
        __typename: "Chatroom",
        id: string,
        newMessages: number,
        Chatters?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        type: string,
        imageUri?: string | null,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChatroomSubscription = {
  onCreateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateChatroomSubscription = {
  onUpdateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteChatroomSubscription = {
  onDeleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    newMessages: number,
    Chatters?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      userID: string,
      chatroomID: string,
      isRead: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatroomUsers?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateWorkoutsSubscription = {
  onCreateWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutsSubscription = {
  onUpdateWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutsSubscription = {
  onDeleteWorkouts?:  {
    __typename: "Workouts",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    numOfCompletions?: string | null,
    workoutName?: string | null,
    weekCompleted?: boolean | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWeeksCompletedSubscription = {
  onCreateWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWeeksCompletedSubscription = {
  onUpdateWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWeeksCompletedSubscription = {
  onDeleteWeeksCompleted?:  {
    __typename: "WeeksCompleted",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTrainingLogsSubscription = {
  onCreateTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTrainingLogsSubscription = {
  onUpdateTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTrainingLogsSubscription = {
  onDeleteTrainingLogs?:  {
    __typename: "TrainingLogs",
    id: string,
    program?: string | null,
    level?: string | null,
    week?: string | null,
    day?: string | null,
    description?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCalculatorResultsSubscription = {
  onCreateCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalculatorResultsSubscription = {
  onUpdateCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalculatorResultsSubscription = {
  onDeleteCalculatorResults?:  {
    __typename: "CalculatorResults",
    id: string,
    clean?: number | null,
    bench?: number | null,
    squat?: number | null,
    level?: string | null,
    userID: string,
    levelID?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    userID: string,
    chatroomID: string,
    isRead: boolean,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRangerMetricsSubscription = {
  onCreateRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRangerMetricsSubscription = {
  onUpdateRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRangerMetricsSubscription = {
  onDeleteRangerMetrics?:  {
    __typename: "RangerMetrics",
    id: string,
    weight?: number | null,
    sleep?: string | null,
    willingness?: string | null,
    appetite?: string | null,
    soreness?: string | null,
    userID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    type: string,
    imageUri?: string | null,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelChatroomUserConnection",
      items:  Array< {
        __typename: "ChatroomUser",
        id: string,
        chatroomID: string,
        userID: string,
        newMessages?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateChatroomUserSubscription = {
  onCreateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdateChatroomUserSubscription = {
  onUpdateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnDeleteChatroomUserSubscription = {
  onDeleteChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    chatroomID: string,
    userID: string,
    newMessages?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      newMessages: number,
      Chatters?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        content: string,
        userID: string,
        chatroomID: string,
        isRead: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatroomUsers?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      type: string,
      imageUri?: string | null,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelChatroomUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};
