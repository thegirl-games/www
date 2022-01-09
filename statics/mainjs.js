let readWeb3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'));
let writeWeb = '';
let wallet_address = '';
let contract_addr = "0xb9232F7B3500644D3e1600a61B6509F6fcB09527";
let reward_addr = "0xe190dE3315372538230fb1b9029DD1f3aD54A4cf";
let reward_abi=[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "claimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" } ], "name": "getUnpaidEarnings", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardsPerStock", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardsPerStockAccuracyFactor", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "setStock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "stocks", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "totalExcluded", "type": "uint256" }, { "internalType": "uint256", "name": "totalRealised", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDistributed", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewards", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStocks", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
let contract_abi = [ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "fomoCheck", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "mint", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI_", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "fomo", "type": "uint256" }, { "internalType": "uint256", "name": "holder", "type": "uint256" }, { "internalType": "uint256", "name": "date", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" } ], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "_base_price", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_base_uri", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fomo_date", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fomo_index", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fomo_lastaddr", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fomo_lastdate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_fomo_rate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_holder_rate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_holder_reward", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_MAX_SUPPLY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_startTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "distributorAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getInfo", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
let downcount = 0;
let fomo_time = 0;
async function connectWallet() {
    document.getElementById("claimBtn").innerHTML = "CONNECT";
    try {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (accounts) {
                if (wallet_address != accounts) {
                    location.reload();
                }
            });
            window.ethereum.on('networkChanged', async function (chainId) {
                if (chainId != "56") {
                    await ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:'0x38',chainName:'Binance Smart Chain',nativeCurrency:{name:'BNB',symbol:'BNB',decimals:18},rpcUrls:['https://bsc-dataseed.binance.org'],blockExplorerUrls:['https://bscscan.com/']}]});
                } else {
                    location.reload();
                }
            });
            let chainId = await new Web3(window.ethereum).eth.net.getId() + "";
            if (chainId != "56") {
                await ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:'0x38',chainName:'Binance Smart Chain',nativeCurrency:{name:'BNB',symbol:'BNB',decimals:18},rpcUrls:['https://bsc-dataseed.binance.org'],blockExplorerUrls:['https://bscscan.com/']}]});
                return;
            }
            let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            writeWeb = new Web3(window.ethereum);
            wallet_address = accounts[0];
            setTimeout(() => {
                document.getElementById("claimBtn").innerHTML = "MINT";
                fetchUser();
            }, 1000);
        }
    } catch (e) {

    }
}

async function fetchPublic(){
    let contract ;
    if(writeWeb){
        contract = new writeWeb.eth.Contract(contract_abi,contract_addr);
	}else{
		contract = new readWeb3.eth.Contract(contract_abi,contract_addr);
	}
    let info = await contract.methods.getInfo().call();
    downcount = info[0];
    let maxSupply = info[1];
    let totalSupply = info[2];
    let price = info[3];
    let fomo_reward = info[4];
    let fomo_addr = info[5];
    fomo_time = info[6];
    let holder_reward = info[7];
    if(downcount > 0){
       document.getElementById("countdownA").style.display = 'block';
       document.getElementById("countdownB").style.display = 'none';
       CountDown()
    }else {
       document.getElementById("countdownA").style.display = 'none';
       document.getElementById("countdownB").style.display = 'block';
    }
    document.getElementById("mintRatio").innerHTML = totalSupply + '/' + maxSupply;
    document.getElementById('percentageWidth').style.width = totalSupply/maxSupply*100+'%';
    document.getElementById("percentage").innerHTML = totalSupply/maxSupply*100+'%';
    document.getElementById("current_price").innerHTML = fixed(div(price,this.pow(10,18)),4) + ' BNB';
    document.getElementById("current_price_1").innerHTML = fixed(div(price,this.pow(10,18)),4) + ' BNB';
    

    document.getElementById("fomo_addr").innerHTML = fomo_addr.substring(0,4)+"..."+fomo_addr.substring(fomo_addr.length-4,fomo_addr.length);
    document.getElementById("fomo_reward").innerHTML = fixed(div(fomo_reward,this.pow(10,18)),4);
    document.getElementById("fomo_time").innerHTML = fomo_time;
    document.getElementById("holder_reward").innerHTML = fixed(div(holder_reward,this.pow(10,18)),4);

    if(fomo_time>0){
        CountFomoDown();
    }
}

async function fetchUser(){
    let contract = new writeWeb.eth.Contract(reward_abi,reward_addr);
    let info = await contract.methods.stocks(wallet_address).call();
    let myclaim = await contract.methods.getUnpaidEarnings(wallet_address).call();
    let myreward = info[2];
    document.getElementById("myreward").innerHTML = plus(fixed(div(myreward,this.pow(10,18)),4),fixed(div(myclaim,this.pow(10,18)),4));
    document.getElementById("myclaim").innerHTML = fixed(div(myclaim,this.pow(10,18)),4);
}

async function mint() {
    if(!wallet_address) {
        connectWallet();
        return;
    }
    let contract = new writeWeb.eth.Contract(contract_abi,contract_addr);
    let amount = await contract.methods.currentPrice().call();
    amount = fixed(plus(amount,mul(amount,0.05)),0);
    contract.methods.mint().send({value:amount,from:wallet_address});
}

async function claim() {
    if(!wallet_address) {
        connectWallet();
        return;
    }
    let contract = new writeWeb.eth.Contract(reward_abi,reward_addr);
    await contract.methods.claimReward().send({from:wallet_address});
}

function CountFomoDown(){
    document.getElementById("fomo_time").innerHTML = tow(parseInt(parseInt(fomo_time/60)/60)%24)+":"+tow(parseInt(parseInt(fomo_time)/60)%60)+":"+tow(fomo_time%60);
    --fomo_time;
    if(fomo_time<=0){
        document.getElementById("fomo_time").innerHTML = "<span style='color:red'>End</span>";
    }else{
        setTimeout('CountFomoDown()',1000);
    }
}

function CountDown() {
    document.getElementById("days").innerHTML = tow(parseInt(parseInt(parseInt(downcount/60)/60)/24));
    document.getElementById("hours").innerHTML = tow(parseInt(parseInt(downcount/60)/60)%24);
    document.getElementById("minutes").innerHTML = tow(parseInt(parseInt(downcount)/60)%60);
    document.getElementById("seconds").innerHTML = tow(downcount%60);
    --downcount;
    if(downcount<=0){
        document.getElementById("countdownA").style.display = 'none';
        document.getElementById("countdownB").style.display = 'block';
    }else{
        setTimeout('CountDown()', 1000);
    }
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}

function div(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(y==0 || x==NaN || y==NaN)return 0;
    return x.dividedBy(y);
}

function mul(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(x==NaN || y==NaN)return 0;
    return x.multipliedBy(y);
}

function pow(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(x==NaN || y==NaN)return 0;
    return x.exponentiatedBy(y);
}

function fixed(val,decimals) {
    let x = new BigNumber(val);
    if(x==NaN)return 0;
    return x.toFixed(decimals,1);
}

function plus(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(x==NaN || y==NaN)return 0;
    return x.plus(y);
}

window.onload = function () {
    fetchPublic();
    connectWallet();
}