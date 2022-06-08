/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event, context) => {
//   // insert code to be executed by your lambda trigger
//   return event
// };
const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB")
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();

  const Item = {
    'id': { S: event.request.userAttributes.sub },
    '__typename': { S: 'User' },
    'email': { S: event.request.userAttributes.email },
    'networth': { N: '250000.0' },
    'totalTrades': { N: '0' },
    'createdAt': { S: date.toISOString() },
    'updatedAt': { S: date.toISOString() },
  }

  if (event.request.userAttributes.picture) {
    Item.image = { S: event.request.userAttributes.picture };
  }

  if (event.request.userAttributes.name) {
    Item.name = { S: event.request.userAttributes.name };
  }

  const params = {
    Item,
    TableName: process.env.USERTABLE,
  }

  try {
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }

  const PortfolioCoinItem = {
    'id': { S: `${event.request.userAttributes.sub}-usd` },
    '__typename': { S: 'PortfolioCoin' },
    'userId': { S: event.request.userAttributes.sub },
    'amount': { N: '250000.0' },
    'coinId': { S: process.env.USD_COIN_ID},
    'createdAt': { S: date.toISOString() },
    'updatedAt': { S: date.toISOString() },
  }

  try {
    await ddb.putItem({
      Item: PortfolioCoinItem,
      TableName: process.env.PORTFOLIO_COIN_TABLE
    }).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }

  context.done(null, event);
}