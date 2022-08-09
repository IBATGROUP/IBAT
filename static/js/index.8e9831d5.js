const copyReferLinkBtns=document.querySelectorAll(".refer-link"),DECIMALS=18,BNB_DECIMALS=18,IBAT_DECIMALS=9,IBAT_PER_BNB_PRESALE=166666.66,IBAT_PER_BNB_PRIVATE=208333.33,defaultReferrer="0x0000000000000000000000000000000000000000";async function populateReferrerinHTML(e){console.log(`populateReferrerinHTML - ${e}`);let r=e;isUserConnected()&&(r=await getReferrer(e));const t=document.querySelector(".refer-referrer");console.log("dev:Setting Referrer Field"),t?t.value=r===defaultReferrer?"":r:console.error("dev:referrerField missing");const n=document.querySelector("#add-referrer");n&&(r===defaultReferrer?n.classList.remove("hidden"):n.classList.add("hidden"));const s=document.getElementById("add-referrer-btn"),o=document.getElementById("add-referrer-address");r!==defaultReferrer&&(disableButton(s),disableButton(o),o.setAttribute("readonly",!0))}async function getReferrer(e){let r={contractAddress:DEPLOYED_CONTRACT_ADDRESS,functionName:"getReferrer",abi:[{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],params:{_user:e}};return await Moralis.executeFunction(r)}async function populateUserReferralsCount(e){let r=e;isUserConnected()&&(r=await getReferralsCount(e));const t=document.querySelectorAll(".refer-total");t&&t.forEach((e=>{e.innerHTML=r}))}async function getReferralsCount(e){let r={contractAddress:DEPLOYED_CONTRACT_ADDRESS,functionName:"getReferralsCount",abi:[{inputs:[{internalType:"address",name:"_userReferralsCount",type:"address"}],name:"getReferralsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],params:{_userReferralsCount:e}},t="";try{t=await Moralis.executeFunction(r)}catch(e){t="Wrong chain connected",console.error(e),console.error("dev:getReferralsCount()")}return t}async function addReferrer(){const e=document.querySelector("#add-referrer-address"),r=document.querySelector("#buy-token-error-con"),t=document.querySelector("#buy-token-error-msg");if(e&&!e.value)return void showErrMsg(r,t,"Вставьте адрес вашего реферального кошелька ниже");if(e&&e.value.length<=6)return void showErrMsg(r,t,"Неверный адрес!");if(isUserConnected){if(!isUserConnected())return void showErrMsg(r,t,"Кошелек не подключен!")}else console.error("referrerAddress#add-referrer-address missing");const n=await getReferrer(getUserWalletAddress());if(console.log(n),console.log(n!==defaultReferrer),console.log(defaultReferrer),n!==defaultReferrer)return console.log(`======= ${n}`),void showErrMsg(r,t,"Адрес реферера уже настроен!");try{let r=await setReferAddress(e.value);populateReferrerinHTML(getUserWalletAddress()),console.log(r)}catch(e){console.error(e),showErrMsg(r,t,"Неверный адрес!")}}async function setReferAddress(e){console.log(`setReferAddress to - ${e}`);let r,t={contractAddress:DEPLOYED_CONTRACT_ADDRESS,functionName:"addReferAddress",abi:[{inputs:[{internalType:"address",name:"referAddress",type:"address"}],name:"addReferAddress",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{referAddress:e}};try{r=await Moralis.executeFunction(t)}catch(e){console.error(e)}return await r.wait()}async function populateUserReferralComissions(e){console.log(`Getting commission of: ${e}`);let r=e;isUserConnected()&&(r=await getTotalReferralCommissions(e));r/=Math.pow(10,9),r=r.toFixed(2);const t=document.querySelectorAll(".refer-earning");t&&t.forEach((e=>{console.log(`Setting commission to: ${r}`),e.innerHTML=`${r} IBAT`}))}async function getTotalReferralCommissions(e){let r={contractAddress:DEPLOYED_CONTRACT_ADDRESS,functionName:"getTotalReferralCommissions",abi:[{inputs:[{internalType:"address",name:"_userCommission",type:"address"}],name:"getTotalReferralCommissions",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],params:{_userCommission:e}};return await Moralis.executeFunction(r)}async function populateUsersInvestments(e){console.log(`Getting commission of: ${e}`);let r=e;isUserConnected()&&(r=await getUsersInvestments(e)),r=+r/Math.pow(10,18),r=166666.66*+r,r=+r.toFixed(2);const t=document.querySelectorAll(".user-investment");t&&t.forEach((e=>{console.log(`Setting investment to: ${r}`),e.innerHTML=`${r} IBAT`}))}const refreshUsersInvestmentBtn=document.getElementById("refreshUsersInvestmentsBtn");function refreshUsersInvestments(){if(console.log("refresh usersInvestments"),isUserConnected())try{populateUsersInvestments(getUserWalletAddress())}catch(e){console.error("failed refresh after buying - populateUsersInvestments")}}async function getUsersInvestments(e){let r={contractAddress:DEPLOYED_CONTRACT_ADDRESS,functionName:"usersInvestments",abi:[{inputs:[{internalType:"address",name:"",type:"address"}],name:"usersInvestments",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],params:{"":e}};return await Moralis.executeFunction(r)}function copyReferLink(){let e=`https://presale.battleinfinity.io/?refercode=${getUserWalletAddress()}`;populateReferralLinkinHTML(e),navigator.clipboard.writeText(e)}function populateReferralLinkinHTML(e){const r=document.querySelectorAll(".refer-link-text");r&&r.forEach((r=>{r.innerHTML=e,r.value=e}))}refreshUsersInvestmentBtn?refreshUsersInvestmentBtn.onclick=refreshUsersInvestments:console.error("Refresh UserInvestmentBtn missing in UI"),copyReferLinkBtns.forEach((e=>e.onclick=copyReferLink));
//# sourceMappingURL=index.8e9831d5.js.map