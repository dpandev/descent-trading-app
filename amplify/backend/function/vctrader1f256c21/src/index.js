/* Amplify Params - DO NOT EDIT
	API_VCTRADER_GRAPHQLAPIENDPOINTOUTPUT
	API_VCTRADER_GRAPHQLAPIIDOUTPUT
	API_VCTRADER_GRAPHQLAPIKEYOUTPUT
	AUTH_VCTRADER130C678B_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { DynamoDB } = require('aws-sdk');
const ddb = new DynamoDB();

const USER_TABLE = process.env.USER_TABLE;
const COIN_TABLE = process.env.COIN_TABLE;
const PORTFOLIO_COIN_TABLE = process.env.PORTFOLIO_COIN_TABLE;

const getAllCoins = async () => {
    const params = {
        TableName: COIN_TABLE,
        ProjectionExpression: 'id,currentPrice',
    }

    const coins = await ddb.scan(params).promise();
    return coins.Items.map(coin => ({
        id: coin.id.S,
        currentPrice: parseFloat(coin.currentPrice.N)
    }));
}

const getAllUsers = async () => {
    const params = {
        TableName: USER_TABLE,
        ProjectionExpression: 'id',
    }

    const users = await ddb.scan(params).promise();
    return users.Items.map(user => ({
        id: user.id.S
    }));
}

const getUserCoins = async (user) => {
    const params = {
        TableName: PORTFOLIO_COIN_TABLE,
        IndexName: 'byUser',
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": { S: user.id }
        },
        ProjectionExpression: 'coinId,amount',
    }

    const usersCoins = await ddb.query(params).promise();
    return usersCoins.Items.map(usersCoin => ({
        coinId: usersCoin.coinId.S,
        amount: parseFloat(usersCoin.amount.N)
    }));
}

const getUserCoinPrice = (userCoin, coins) => {
    const coin = coins.find(c => c.id === userCoin.coinId);
    return coin ? coin.currentPrice : 0;
}

const updateUserNetWorth = async (user, newNetWorth) => {
    console.log(`User ${user.id} new networth: ${newNetWorth}`);

    const params = {
        TableName: USER_TABLE,
        Key: {
            id: { S: user.id }
        },
        UpdateExpression: 'SET networth = :networth',
        ExpressionAttributeValues: {
            ":networth": { N: newNetWorth.toString() }
        }
    }

    await ddb.updateItem(params).promise();
}

const calculateUserNetWorth = async (user, coins) => {
    const userCoins = await getUserCoins(user);

    const sumUserCoins = (sum, userCoin) => sum + userCoin.amount * getUserCoinPrice(userCoin, coins);

    const netWorth = userCoins.reduce(sumUserCoins, 0)

    return updateUserNetWorth(user, netWorth);
}

exports.handler = async () => {
    const coins = await getAllCoins();
    const users = await getAllUsers();

    await Promise.all(users.map(user => calculateUserNetWorth(user, coins)));

    return true;
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };
