import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"
const abi = CampaignFactory.abi;
const instance = new web3.eth.Contract(abi, '0x4C34b1b4ac32Bc0F703A24FdD467c772c9F6cB9C');

export default instance;