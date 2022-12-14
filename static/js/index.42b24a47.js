window.onload = async function () {
  if (
    (console.log("dev:onload"),
    showConnectButtons(),
    populateAmountRaisedinHTMLDB(),
    await isWeb3Installed())
  ) {
    console.log(
      "dev: web3 installed  - checking if user is connected upon refreshing"
    );
    // try {
    //   console.log("dev: onload - enabling web3"),
    //     await Moralis.enableWeb3(),
    //     console.log("dev: onload - enabled web3");
    // } catch (e) {
    //   console.error(e), console.error("dev: onload - failed to enable web3");
    // }
    // isUserConnected()
    //   ? (console.log("dev: Page-refreshed - User already connected"), login())
    //   : console.log("dev: Page-refreshed - User not connected");
  } else
    !(await isWeb3Installed()) &&
      isUserConnected() &&
      (isUserConnected()
        ? (console.log("dev: Page-refreshed - User already connected"),
          login("walletconnect"))
        : console.log("dev: Page-refreshed - User not connected"));
};
const TEST_ENVIRONMENT = !1,
  IS_PRESALE = !0,
  HARDCAP = 16500,
  REFER_CONTRACT_ADDRESS_TESTNET = "0xfe2E124FE1418419A9efd8Ba987Fa1769D506c8a",
  REFER_CONTRACT_ADDRESS_MAINNET = "0x5832E385f633b30519B3ECaDE3C5eD3d9881cf58",
  DEPLOYED_CONTRACT_ADDRESS = REFER_CONTRACT_ADDRESS_MAINNET;
console.log(`Deployed Presale Contract is ${DEPLOYED_CONTRACT_ADDRESS}`);
let isSaleOpen = !1;
const CONFIRMATIONS_ON_BSC = 5,
  serverUrl_Testnet = "https://gusm6vrpbwtk.usemoralis.com:2053/server",
  appId_Testnet = "glRYjrZo9XjLE2MPc7sWgzc4PyoFs3RbmyoNiPbf";
let currentChainIdHex,
  serverUrl_Mainnet = "https://gb6gwydcjjw6.usemoralis.com:2053/server",
  appId_Mainnet = "Zq3s8magh8mlppfXIGSHZRdLj49LlCnIaqs2mD2U";
try {
  console.info("starting server - mainnet "),
    Moralis.start({ serverUrl: serverUrl_Mainnet, appId: appId_Mainnet });
} catch (e) {
  console.error("Server failed to start -ln-34"), console.log(e);
}
const walletOptions = document.getElementById("wallet-options"),
  loginBtn = document.getElementById("web3-login-mm"),
  logoutBtn = document.getElementById("web3-logout"),
  buyBtn = document.getElementById("buy_btn"),
  showTokenBtn = document.getElementById("web3-tokens"),
  BscChainIdMain = 56,
  BscChainIdTest = 97,
  showAddressHeader = document.getElementById("web3-wallet-address-header");
let web3 = new Web3(Moralis.provider || Web3.givenProvider);
const NODE_URL_TESTNET =
    "https://speedy-nodes-nyc.moralis.io/7569a2c3fc822716349963c8/bsc/testnet",
  NODE_URL_MAINNET =
    "https://speedy-nodes-nyc.moralis.io/7569a2c3fc822716349963c8/bsc/mainnet";
let provider = "";
const userEnteredPassword = document.querySelector("#presale-password");
function atLogin() {
  let e = getUserWalletAddress();
  let o = `https://presale.battleinfinity.io/?refercode=${e}`;
  userEnteredPassword || (presalePasswordEntered = !0),
    manageTooltipWidth(),
    toggleChainName(!0),
    toggleConnectStatus(),
    populateUserAddress(getUserWalletAddress(), !0);
  const t = document.querySelector("#second-login-btn");
  disableButton(t), t.setAttribute("for", "");
  let n = 56,
    s = parseInt(currentChainIdHex, 16);
  if (s === n) {
    try {
      console.log("start - populateReferralLinkinHTML .."),
        populateReferralLinkinHTML(o),
        console.log("done - populateReferralLinkinHTML ");
    } catch (e) {
      console.error("dev:failed - populateReferralLinkinHTML");
    }
    try {
      console.log("start - populateReferrerinHTML .."),
        populateReferrerinHTML(e),
        console.log("done - populateReferrerinHTML");
    } catch (e) {
      console.error("dev:failed - populateReferrerinHTML");
    }
    try {
      console.log("start - populateUserReferralComissions"),
        populateUserReferralComissions(e),
        console.log("done - populateUserReferralComissions");
    } catch (e) {
      console.error("dev:failed - populateUserReferralComissions");
    }
    try {
      console.log("start - populateUserReferralsCount"),
        populateUserReferralsCount(e),
        console.log("done - populateUserReferralsCount");
    } catch (e) {
      console.error("dev:failed - populateUserReferralsCount");
    }
    try {
      console.log("start - populateUsersInvestments"),
        populateUsersInvestments(e),
        console.log("done - populateUsersInvestments");
    } catch (e) {
      console.error("dev:failed - populateUsersInvestments");
    }
    try {
      updateBNBRaised();
    } catch (e) {
      console.error("failed - updateBNBRaised - atlogin");
    }
  } else
    (n += ""),
      console.error(`dev: atlogin() BSC_Chain = ${n}`),
      console.error(`dev: atlogin() tempCurrentChainIdHex = ${s}`),
      console.error("dev: Didn't run atlogin() methods coz wrong chain");
  isUserConnected() && toggleBtnVisibility(!0);
}
async function updateBNBRaised() {
  let e = 0;
  try {
    e = await getTotalBNBAmount();
  } catch (e) {
    console.error(e), console.error("dev:failed - updateBNBRaised");
  }
  e = +e.toFixed(2);
  let o = "";
  try {
    o = percentageOfBNBRaised(e, 16500);
  } catch (e) {
    console.error("dev: percentageOfBNBRaised() issue");
  }
  console.log(`raisedAmount = ${e}`),
    console.log(`raisedAmountPercentage = ${o}`),
    updateRaisedBNBinDB(e, o);
}
function manageTooltipWidth() {
  const e = document.querySelector("#web3-wallet-address-header");
  e
    ? isUserConnected()
      ? ((e.dataset.tip = getUserWalletAddress()),
        +window.innerWidth <= 610
          ? e.style.setProperty("--custom-tooltip-left", "50%")
          : e.style.setProperty("--custom-tooltip-left", "0px"))
      : ((e.dataset.tip = ""),
        +window.innerWidth > 610 &&
          e.style.setProperty("--custom-tooltip-left", "-15px"))
    : console.error("tooltip missing");
}
async function addNetwork(e) {
  const o = e,
    t = "BSC Mainnet Smart Chain",
    n = "https://bsc-dataseed.binance.org/",
    s = "https://bscscan.com/";
  console.log("BscChainId-chainName-rpcUrl-blockexplorer"),
    console.log(`${o}-${t}-${n}-${s}`),
    await Moralis.addNetwork(o, t, "BNB", "BNB", n, s);
}
async function switchAndAdd(e = "0x61") {
  console.log("switchAndAdd - toChainid"), console.log(e);
  try {
    await switchNetwork(e);
  } catch (o) {
    await addNetwork(e);
  }
}
async function switchNetwork(e = "0x61") {
  currentChainIdHex = await Moralis.switchNetwork(e);
}
async function login(e) {
  let o = Moralis.User.current();
  if (!o) {
    console.info(`dev: login() - Provider :${e}`);
    try {
      console.log("Deactivating old instance of Web3"),
        Moralis.isEnablingWeb3 && (await Moralis.deactivateWeb3()),
        console.log("Deactivated old instance of Web3");
    } catch (e) {
      console.error(e),
        console.error("dev:failed Deactivating old instance of Web3");
    }
    if ("walletconnect" === e)
      try {
        console.info("???Authenticating with WalletConnect"),
          (o = await Moralis.authenticate({
            provider: "walletconnect",
            chainId: 56,
            signingMessage: "Battle Infinity Authentication: WalletConnect",
          })),
          console.info("???Authenticated with WalletConnect");
      } catch (e) {
        console.error(e),
          console.error(
            "dev:???Authentication Failed - Walletconnect - login()"
          );
      }
    else {
      console.info("Authenticating with MetaMask");
      try {
        if (
          ((currentChainIdHex = await Moralis.getChainId()),
          56 !== currentChainIdHex)
        ) {
          console.log(`Current chain -${currentChainIdHex}`),
            console.log("BSC chain - 56"),
            console.log("BSC_Chain - 56");
          try {
            console.log(
              "dev: login metamask - enabling web3 for switching chain"
            ),
              await Moralis.enableWeb3(),
              console.log(
                "dev: login metamask - enabled web3 for switching chain"
              );
          } catch (e) {
            console.error(e),
              console.error(
                "dev: login metamask - failed to enable web3 for switching chain"
              );
          }
          await switchAndAdd(56);
        }
        o = await Moralis.authenticate({
          signingMessage: "Battle Infinity Authentication",
        });
        try {
          hitDataLayer(getUserWalletAddress());
        } catch (e) {
          console.error("dev:couldn't hit data layer");
        }
      } catch (e) {
        console.error(e),
          console.error(
            "dev: login metamask - failed to enable web3 for switching chain"
          );
      }
    }
  }
  try {
    (currentChainIdHex = await Moralis.getChainId()),
      console.info("dev:getChainId() succeded - login()"),
      console.info(`dev: current chain ${currentChainIdHex} - login()`);
  } catch (e) {
    console.error(e), console.error("dev:getChainId() Failed - login()");
  }
  if (isUserConnected()) {
    console.log("IBAT Authentication - userconnected");
    try {
      (isSaleOpen = await isPresaleOpen()),
        console.log(`sale open - ${isSaleOpen}`);
    } catch (e) {
      console.error(e), console.error("dev:failed isSaleOpen() - buyToken()");
    }
    atLogin();
  }
}
function getUserWalletAddress() {
  return isUserConnected()
    ? Moralis.User.current().get("ethAddress")
    : "Wallet not connected";
}
function isUserConnected() {
  return !!Moralis.User.current();
}
async function logOut() {
  await Moralis.User.logOut();
  try {
    await Moralis.deactivateWeb3(),
      console.info("Success - Moralis.deactivateWeb3() -logout()");
  } catch (e) {
    console.error("dev:failed Moralis.deactivateWeb3(); - logout()");
  }
  console.log("logged out"), await atLogout();
}
async function atLogout() {
  userEnteredPassword && (presalePasswordEntered = !1);
  try {
    populateReferralLinkinHTML("Wallet not connected");
  } catch (e) {
    console.log(e),
      console.error(
        "dev:failed - populateReferralLinkinHTML('Wallet not connected') - atlogout()"
      );
  }
  try {
    populateReferrerinHTML("Wallet not connected");
  } catch (e) {
    console.log(e),
      console.error(
        "dev:failed - populateReferrerinHTML('Wallet not connected') - atlogout()"
      );
  }
  try {
    populateUserReferralComissions("0");
  } catch (e) {
    console.log(e),
      console.error(
        "dev:failed - populateUserReferralComissions('0') - atlogout()"
      );
  }
  try {
    populateUserReferralsCount(0);
  } catch (e) {
    console.log(e),
      console.error("dev:failed - populateUserReferralsCount(0) - atlogout()");
  }
  try {
    populateUsersInvestments("0");
  } catch (e) {
    console.log(e), console.error("dev:failed - populateUsersInvestments");
  }
  try {
    isSaleOpen = !1;
  } catch (e) {
    console.error(e), console.error("dev:atLogout");
  }
  manageTooltipWidth(),
    toggleChainName(!1),
    toggleConnectStatus(),
    populateUserAddress("not connected", !1);
  const e = document.querySelector("#second-login-btn");
  enableButton(e), e.setAttribute("for", "wallets");
  const o = document.querySelector("#add-referrer");
  o && o.classList.add("hidden"), toggleBtnVisibility(!1);
  try {
    setPresalePassword && setPresalePassword();
  } catch (e) {
    console.error("dev:setPresalePassword(); not defined");
  }
  try {
    showArenaLock && showArenaLock(!0);
  } catch (e) {
    console.error("dev:showArenaLock(); not defined");
  }
  const t = document.getElementById("add-referrer-btn"),
    n = document.getElementById("add-referrer-address");
  enableButton(t), enableButton(n), n.removeAttribute("readonly");
}
function toggleBtnVisibility(e) {
  const o = document.querySelectorAll(".wallet-options-btn ");
  e
    ? (o.forEach((e) => {
        e.classList.add("hidden");
      }),
      logoutBtn && logoutBtn.classList.remove("hidden"),
      showTokenBtn && showTokenBtn.classList.remove("hidden"))
    : (o
        ? o.forEach((e) => {
            e.classList.remove("hidden");
          })
        : console.error("ln:249-Invalid Arguments"),
      logoutBtn && logoutBtn.classList.add("hidden"),
      showTokenBtn && showTokenBtn.classList.add("hidden"));
}
function toggleConnectStatus() {
  const e = document.querySelectorAll(".connectivity-status");
  e &&
    e.forEach((e) => {
      isUserConnected()
        ? (e.classList.remove("bg-red-400"),
          (e.style.background = "#4ade80"),
          (e.innerHTML = "connected"))
        : ((e.style.background = "#f87171"), (e.innerHTML = "not connected"));
    });
}
function convertTokenBalance(e, o) {
  let t = 0 == e ? 0 : e / Math.pow(10, o);
  return (t = t < 0.001 ? 0 : t), t;
}
async function isPresaleOpen() {
  return await readFunction("isPresaleOpen", [
    {
      inputs: [],
      name: "isPresaleOpen",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ]);
}
async function readFunction(e, o) {
  let t = {
    contractAddress: DEPLOYED_CONTRACT_ADDRESS,
    functionName: e,
    abi: o,
  };
  return await Moralis.executeFunction(t);
}
function getBuyAmount() {
  let e = 0;
  return (
    document.querySelectorAll(".buy-amount").forEach((o) => {
      o.value && (e = +o.value);
    }),
    console.log("buyAmount = " + +e),
    e
  );
}
async function buyToken() {
    toastError("????PRESALE SOLD OUT????");
    return;
  const e = +getBuyAmount(),
    o = document.getElementById("buy-token-error-con"),
    t = document.getElementById("buy-token-error-msg");
  let n = "Error";
  if (!isUserConnected())
    return (
      console.log("User not Logged in - connect wallet"),
      (n = "Wallet not connected"),
      void showErrMsg(o, t, n)
    );
  if (e <= 0)
    return (
      (n = "Enter valid amount between 0.1-500BNB"),
      console.error(`dev: BNBAmount = ${e}`),
      void showErrMsg(o, t, n)
    );
  if (isNaN(e))
    return (
      (n = "Enter valid amount"),
      console.error(`dev: BNBAmount = ${e}`),
      console.error(`dev: isNaN(BNBAmount) = ${isNaN(e)}`),
      void showErrMsg(o, t, n)
    );
  if (!Moralis.isWeb3Enabled())
    return (
      console.error(
        "dev:login() failed - Moralis.isWeb3Enabled() - probably wallet disconnected"
      ),
      (n =
        "Something went wrong, kindly\n??? disconnect,\n??? refresh page and \n??? connect again."),
      void toastError(n)
    );
  let s =
    (await Moralis.Web3API.account.getNativeBalance({ chain: "bsc" })) /
    Math.pow(10, BNB_DECIMALS);
  if (s < e)
    return (
      (n = `Your BNB balance: ${s}\n Min required = 0.1BNB + gas`),
      void toastError(n)
    );
  if (!isSaleOpen)
    return (
      console.log("Presale is not open"),
      (n = "Presale has not yet started !!!"),
      void showErrMsg(o, t, n)
    );
  if (
    "0xc8179e6927b61a4fdc3e5a2db14e641e51b9ad83" !== getUserWalletAddress() &&
    +e < 0.1
  )
    return (
      (n = "Minimum BNB Amount should be 0.1BNB"), void showErrMsg(o, t, n)
    );
  if (+e > 500)
    return (n = "Maximum BNB Amount is 500BNB"), void showErrMsg(o, t, n);
  let r,
    a = {
      contractAddress: DEPLOYED_CONTRACT_ADDRESS,
      functionName: "buyToken",
      abi: [
        {
          inputs: [],
          name: "buyToken",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(e),
    };
  console.log("buyToken Contract Function options - "),
    console.log(a),
    console.log("buyToken Contract Function options - msgVal"),
    console.log(a.msgValue);
  let l = getUserEnteredCouponCode();
  if (l && l.length > 0)
    try {
      if (!(await isValidCouponCode(l)))
        return void toastError(
          "???Enter valid Coupon code\nor remove it - empty the coupon field."
        );
    } catch (e) {
      console.error(e),
        console.error("dev:buyToken() - failed to upload coupon user's detail");
    }
  try {
    buyBtn.onclick = "";
    let o = getUserWalletAddress();
    console.log("Transaction started"), swapAmountDataLayer(o);
    const t = await Moralis.executeFunction(a);
    showTransactionLoader(!0),
      confirmTransactionDataLayer(o),
      console.log("Transaction in progress"),
      console.log("Transaction data:"),
      console.log(t),
      (r = await t.wait(5)),
      console.log("Waiting for 5 confirmations"),
      console.log("Transaction Hash"),
      console.log(r.transactionHash),
      updateBNBRaised(),
      showTransactionLoader(!1),
      "undefined" == typeof toastSuccess
        ? alert(
            "???Transaction Successful???\nPlease Import token and check your wallet."
          )
        : toastSuccess(
            "???Transaction Successful.\nPlease Import token and check your wallet.",
            1e4
          );
    let n = calculateIBATAmount(e);
    l &&
      l.length > 0 &&
      updateCouponUserDB(r.transactionHash, o, e, n, l)
        .then(() => {
          toastSuccess("???Coupon Added Successfully.", 1e4);
        })
        .catch((e) => {
          toastError("???Coupon Adding failed.", 1e4),
            console.error(e),
            console.error("dev:buyToken() - updateCouponUserDB failed");
        }),
      refreshUsersInvestments(),
      r && swapSuccessfulDataLayer(o, r.transactionHash, e, n),
      console.log(
        `Add: ${o} \n tID: ${r.transactionHash} \n BNB: ${e} \nIBAT: ${n}`
      ),
      (buyBtn.onclick = buyToken);
  } catch (e) {
    if (
      ((buyBtn.onclick = buyToken),
      console.error("Transaction cancelled"),
      e.message &&
        (console.error(e.message),
        console.error("dev:buyToken() - Transaction cancelled - 1"),
        (n = e.message),
        n.includes("User denied transaction signature")))
    )
      return (n = "Transaction declined by User"), void showErrMsg(o, t, n);
    (n = e.data.message),
      console.error(n),
      console.error("dev:buyToken() - Transaction cancelled - 2"),
      (n = "Insufficient BNB in wallet"),
      showErrMsg(o, t, n);
  }
}
async function getTotalBNBAmount() {
  let e = {
      contractAddress: DEPLOYED_CONTRACT_ADDRESS,
      functionName: "totalBNBAmount",
      abi: [
        {
          inputs: [],
          name: "totalBNBAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    o = await Moralis.executeFunction(e);
  return (o /= Math.pow(10, DECIMALS)), o;
}
async function populateAmountRaisedinHTML() {
  console.log("populateAmountRaisedinHTML-switchAndAdd-chainId-56"),
    await switchAndAdd(56),
    console.log("ran - populateAmountRaisedinHTML");
  let e = await getTotalBNBAmount();
  (e = +e.toFixed(2)), console.log(`raisedAmount = ${e}`);
  let o = "";
  try {
    o = percentageOfBNBRaised(e, 16500);
  } catch (e) {
    console.error("dev: percentageOfBNBRaised() issue");
  }
  console.log(`raisedAmount = ${e}`), console.log(`setting % = ${o}`);
  const t = document.querySelectorAll(".sale-progress");
  t &&
    t.forEach((e) => {
      let t = o;
      t < 1 && (t = 1), (e.value = t);
    });
  const n = document.querySelectorAll(".sale-progress-amount");
  n &&
    n.forEach((o) => {
      o.innerHTML = e;
    });
  const s = document.querySelectorAll(".sale-progress-percentage");
  s &&
    s.forEach((e) => {
      e.innerHTML = o;
    });
  document.querySelectorAll(".sale-progress-val-parent").forEach((e) => {
    let t = +o - 3;
    t >= 94 && (t = 94);
    t <= 0 && (t = 0), (e.style.left = `${t}%`);
  });
  document.querySelectorAll(".sale-progress-val-parent-mob").forEach((e) => {
    let t = +o - 3;
    t >= 65 && (t = 65);
    t <= 0 && (t = 0), (e.style.left = `${t}%`);
  });
}
function toggleErrMsg() {
  const e = document.getElementById("buy-token-error-input");
  e.checked = !e.checked;
}
async function isWeb3Installed() {
  const e = window.ethereum;
  let o = !0;
  return (
    (e && e.on) ||
      (console.log("dev:isWeb3Installed - Metamask not installed"), (o = !1)),
    o
  );
}
function toggleChainName(e = !1) {
  const o = document.getElementById("web3-wallet-chainid-con"),
    t = document.getElementById("web3-wallet-chainid");
  e
    ? ((t.innerHTML = HEX_TO_CHAIN_DETAILS[currentChainIdHex]
        ? HEX_TO_CHAIN_DETAILS[currentChainIdHex].chain
        : "NOT BSC"),
      o.classList.remove("hidden"))
    : o.classList.add("hidden");
}
function populateUserAddress(e, o = !1) {
  const t = document.querySelectorAll(".web3-wallet-address-label"),
    n = document.querySelectorAll(".web3-wallet-address-field");
  n &&
    n.forEach((o) => {
      o.value = e;
    }),
    t &&
      t.forEach((e) => {
        o ? e.classList.remove("hidden") : e.classList.add("hidden");
      });
}
const showAddressBtn = document.getElementById("web3-wallet-address-btn");
let showAddressFied = !1;
function toggleShowAddress() {
  showAddressFied = !showAddressFied;
  const e = document.querySelectorAll(".web3-wallet-address-label input");
  console.log(`toggleShowAddress - show : ${showAddressFied}`),
    e.forEach((e) => {
      showAddressFied
        ? (e.setAttribute("type", "text"), (showAddressBtn.innerHTML = "HIDE"))
        : (e.setAttribute("type", "password"),
          (showAddressBtn.innerHTML = "SHOW"));
    });
}
showAddressBtn && (showAddressBtn.onclick = toggleShowAddress),
  buyBtn
    ? (buyBtn.onclick = buyToken)
    : console.error("Login button missing in UI"),
  loginBtn
    ? (loginBtn.onclick = login)
    : console.error("Login button missing in UI"),
  logoutBtn
    ? (logoutBtn.onclick = logOut)
    : console.error("Logout button missing in UI");
const HEX_TO_CHAIN_DETAILS = {
  "0x1": { chain: "ETH", nativeToken: "ETH" },
  "0x61": { chain: "tBSC Testnet", nativeToken: "tBNB" },
  "0x38": { chain: "BSC Mainnet", nativeToken: "BNB" },
};
//# sourceMappingURL=index.42b24a47.js.map
