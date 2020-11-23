var faker = require('faker');
const fs = require('fs')

function genTxs(num) {
    let txs = []
    for(let step=0; step <= num; step++) { txs.push(genTx(step)) }
    return writeTXs(txs)
} 

function genTx(id) {
    return {
        id: String(id), 
        amount: faker.finance.amount(),
        country: faker.address.countryCode(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        currency: faker.finance.currencyCode(),
        bitcoinAddress: faker.finance.bitcoinAddress(),
        customerName: faker.name.findName(),
        customerEmail: faker.internet.email(),
        customerId: faker.internet.userName()
    }
}

function writeTXs(txs) {    
    try { return fs.writeFileSync('txs.json', JSON.stringify(txs)) } 
    catch (err) { console.error(err) }
}

(genTxs(30000))