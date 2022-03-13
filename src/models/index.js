// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Workouts, WeeksCompleted, TrainingLogs, CalculatorResults, Chatroom, Message, ChatroomUser, User, RangerMetrics } = initSchema(schema);

export {
  Workouts,
  WeeksCompleted,
  TrainingLogs,
  CalculatorResults,
  Chatroom,
  Message,
  ChatroomUser,
  User,
  RangerMetrics
};