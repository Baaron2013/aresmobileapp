const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event) => {
  // insert code to be executed by your lambda trigger
  if (!event?.request?.userAttributes?.sub){
    console.log("No sub provided.");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    __typename: { S: 'User' },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    updatedAt: { S: now.toISOString() },
    createdAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    email: { S: event.request.userAttributes.email },
    name: { S: event.request.userAttributes.name },
    type: { S: event.request.userAttributes.nickname },
  }

  const params = {
    Item: userItem,
    TableName: tableName
  }

  try {
    await ddb.putItem(params).promise();
    console.log('user added to database');
  }catch (e) {
    console.log(e);
  }
  
};
