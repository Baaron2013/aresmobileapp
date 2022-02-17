// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chatroom, Message, ChatroomUser, User, RangerMetrics } = initSchema(schema);

export {
  Chatroom,
  Message,
  ChatroomUser,
  User,
  RangerMetrics
};