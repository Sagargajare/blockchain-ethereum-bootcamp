const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildpath = path.resolve(__dirname, 'build');
fs.removeSync(buildpath);

const compaignPath = path.resolve(__dirname, "contracts", "Campaign.sol"); 
const source = fs.readFileSync(compaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;
fs.ensureDirSync(buildpath);

for (let contract in output) { 
    fs.outputJsonSync(
        path.resolve(buildpath, contract.replace(':','') + '.json'),
        output[contract]
    )
}