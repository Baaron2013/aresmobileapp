// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Workouts, CalculatorResults, Chatroom, Message, ChatroomUser, User, RangerMetrics } = initSchema(schema);

export {
  Workouts,
  CalculatorResults,
  Chatroom,
  Message,
  ChatroomUser,
  User,
  RangerMetrics
};