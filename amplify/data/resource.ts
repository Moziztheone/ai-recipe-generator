import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

// Define the schema with a.schema()
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      key: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()])
});

// Define the schema type
export type Schema = ClientSchema<typeof schema>;

// Export the data definition
export default defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
