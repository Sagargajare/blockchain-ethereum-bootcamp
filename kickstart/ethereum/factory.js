import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xb7e795448d8fe1db75bba2657f4f9262cfe9dc64"
);

export default instance;