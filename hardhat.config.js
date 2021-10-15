require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        rinkeby: {
            url: 'https://eth-rinkeby.alchemyapi.io/v2/oU_d40Vy8rZzxyb7Q6tqj0rCIYsBw31s',
            accounts: ['8790a81f5fa8f572c9f388b478feac1a88687d50e2ed81134e75eca3e3dda5b3'],
        },
    },
}
