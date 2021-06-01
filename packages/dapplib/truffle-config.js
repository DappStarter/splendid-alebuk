require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain collect grace beauty food genre'; 
let testAccounts = [
"0x04164fb79363d4458ad7a2cafb6f6e6c1c6db0b19b769c26e0972fe598c559dd",
"0x24ddde3d1076b5c38686f8c6138feb569a929640c04d73b97e92812802ea6345",
"0x2a33ebba99099b64e58cf80ca905f6b30103279f66ed599d3fa85f8c542b8539",
"0xd71bfec6cfbccee1e0f80dbb59e8f9a9b2ccc479bb7a85c51204cdd49547f09e",
"0x6ae046dc8b9fb558f06e51d0155e79d30c3e376bba4c2eac5007333b97b6bdab",
"0xd9cf205f55e11f76e45e46663b85e487edcf79727048e0d9bae03e6a0bc8f959",
"0x4519aeeb75b3fad9d438fb8f585c8a88738d1b7b4405a0abee8c5218789240db",
"0xb0d0f647778bc03b7abc4ae8260ad03b223af6954113c1b9abf5f80aab1751c0",
"0x283a1ca5cbe9d48dfda2ecd3539b4c56d76f6f2f35e1dbc09c2ebcb5bf2eeff2",
"0x06bedff198833c696aa159f6e6f73384a4fc267a6c2d6b6b382a8a7202cbfd55"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

