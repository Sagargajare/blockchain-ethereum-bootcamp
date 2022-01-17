const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  "uncle observe hurdle begin middle filter situate roast truck antenna pool garbage",
  "https://rinkeby.infura.io/v3/1cabc393178a410aa2d7f2c6ea0f8ef7"
 
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  // console.log(JSON.parse(result._jsonInterface));
  // console.log(JSON.parse(result));
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
