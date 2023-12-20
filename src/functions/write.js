import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

console.log(import.meta.env)

const client = new DynamoDBClient({
  region: 'us-east-2',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  }
});
const docClient = DynamoDBDocumentClient.from(client);

export const addUser = async (email, firstName, lastName) => {
  const command = new PutCommand({
    TableName: 'beech-brook-test',
    Item: {
      pk: email,
      sk: email,
      firstName,
      lastName
    }
  });

  const response = await docClient.send(command);
  return response;
};
