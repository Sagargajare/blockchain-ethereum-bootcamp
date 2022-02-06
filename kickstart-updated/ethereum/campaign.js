import web from './web3';
import Campaign from "./build/Campaign.json";
import web3 from './web3';
const compiledCampaign = require('../ethereum/build/Campaign.json');

const getCampaignContract=(address) => { 
    return new web3.eth.Contract(compiledCampaign.abi,
        address);
}

export default getCampaignContract;