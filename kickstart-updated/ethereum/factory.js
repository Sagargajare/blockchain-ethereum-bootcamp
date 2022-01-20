import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"
const abi = CampaignFactory.abi;
const instance = new web3.eth.Contract(abi, '0xb7E795448d8fe1dB75BbA2657F4F9262cfE9Dc64');

export default instance;