// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Location, Geo } = initSchema(schema);

export {
  Location,
  Geo
};