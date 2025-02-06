import { type SchemaTypeDefinition } from 'sanity'
import food from './food';
import chef from './chef';
import user from './user';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chef,user],
}
