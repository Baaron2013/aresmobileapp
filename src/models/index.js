// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RangerMetrics, User } = initSchema(schema);

export {
  RangerMetrics,
  User
};