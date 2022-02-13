// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RangerMetrics, Message, User, ChatRoomUser, ChatRoom } = initSchema(schema);

export {
  RangerMetrics,
  Message,
  User,
  ChatRoomUser,
  ChatRoom
};