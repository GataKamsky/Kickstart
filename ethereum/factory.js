import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//Old contract   '0x809Af59E3aA22D98df3623F15B7155439fAFA6Fd'
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7525Ad8744557E4F85883AD0b251a12084f6533A'
);

export default instance;
