# Descent

## A Virtual Crypto Trading App

Built with React Native Expo and utilizes AWS Amplify for the backend.

### AWS Services used:

- Appsync for GraphQL operations
- Cognito for user authentication
- Lambda for order fullfillment, getting crypto prices, & updating user networths
- DynamoDB for storing user portfolios, profiles, & currency values

Users can signin/signup using social login providers Apple and Google and are given 250k virtual currency to trade on the crypto market with over 50 different cryptocurrencies available. Crypto prices are fetched on a recurring 5 minute interval from the CoinGecko API via a Lambda function, which updates the prices in DynamoDB. Users' networths are also updated when coin prices are fetched to provide real-time portfolio values.

<div style="flex-direction: row;">
  <img src="./assets/images/showcase/DescentShowcaseLogin.gif" style="width: 300px;">
  <img src="./assets/images/showcase/DescentExchange.gif" style="width: 300px;">
  <img src="./assets/images/showcase/DescentSocial.gif" style="width: 300px;">
</div>
