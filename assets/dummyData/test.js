const https = require('https')

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Cripple%2Cdogecoin%2Csolana%2Cpolkadot%2Cmonero%2Cdai%2Cethereum-classic%2Cchainlink%2Clitecoin%2Cstellar%2Ccronos%2Cvechain%2Cflow%2Calgorand%2Ctezos%2Cdecentraland%2Capecoin%2Cbitcoin-cash%2Caave%2Czcash%2Cdigibyte%2Cvethor-token%2Cneo%2Cmatic-network%2Ciexec-rlc%2Corchid-protocol%2Comisego%2Cbasic-attention-token%2Cfilecoin%2Cthe-sandbox%2Cshiba-inu%2Cwrapped-bitcoin%2Ceos%2Cdash%2Cgala%2Cbancor%2Cmedibloc%2Ccoin98%2Cbitcoin-cash-sv%2Cmaker%2Caxie-infinity%2Chelium%2Ctheta-token%2Cuniswap%2Cnear%2Cavalanche-wormhole%2Cbitcoin-gold&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'

https.get(URL, (resp) => {
  let data = ''

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk
  })

  const date = new Date()
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    const dataJson = JSON.parse(data)

    const Items = dataJson.map((entry) => ({
      id: { S: entry.id },
      cgId: { S: entry.id },
      symbol: { S: entry.symbol },
      image: { S: entry.image },
      name: { S: entry.name },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
      currentPrice: { N: entry.current_price.toString() },
      valueChange1H: { N: entry.price_change_percentage_1h_in_currency.toString() },
      valueChange24H: { N: entry.price_change_percentage_24h_in_currency.toString() },
      valueChange7D: { N: entry.price_change_percentage_7d_in_currency.toString() },
      priceHistoryString: { S: JSON.stringify(entry.sparkline_in_7d.price) },
    }))
  })

}).on("error", (err) => {
  console.log("Error: " + err.message)
})