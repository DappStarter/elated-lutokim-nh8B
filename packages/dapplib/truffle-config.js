require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew still mistake hidden enter equal gift'; 
let testAccounts = [
"0xefa0204abf086d5049a439b63c0ad80291fcc7f7793bf95f1167d867afa33f42",
"0x1ed7d11ab4d585e261a18601acb2ca4684640fd031296a1c64caeab9283ee8d6",
"0xb00398cec264316a45165fe4d6b94dcef779761b3eaa827084f211b2dad2688b",
"0x5e9f3d7dbe8fb7ff1110b3b2d71df1eebcda1a9659e830bc5d8daaab8d97d2fc",
"0x07055e7254e64bd7df3575e333115308cb64aced642ea3da8a83937f4be454ff",
"0xcb47e8fc1b9f477b2c1c4bc3aba48477ff073611c4b0c04681dcebb5e713328a",
"0x02a37bbd6bc108baaac4dd90fa31f36a4c69ce055c4de0e0c85c5607e30439b9",
"0xfab4906e302155ee2f89d7236de19b69d257b0d605475b03f59e5458abe32142",
"0xd99186f29557ec5778bff40238616ab45dfe5654fcbdaa935fddd898f20d145d",
"0x8ef53ddaca9e144fd5d6d733ea8353adc45aa31df0707c847cb8896c87cc2327"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

