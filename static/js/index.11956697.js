function checkDataLayer(){try{window.dataLayer=window.dataLayer||[],errorCode="",arguments={event:"workflowStep",workflowName:"connectWallet",workflowStepNumber:1,workflowStepName:"start",workflowCompleteFlag:0,workflowErrorCode:{errorCode:errorCode}},console.log("dev-check-data-layer-",arguments),window.dataLayer.push(arguments)}catch(e){console.error("dev:checkDataLayer failed"),console.error(e.message)}}function hitDataLayer(e){try{window.dataLayer=window.dataLayer||[],arguments={event:"workflowStep",workflowName:"connectWallet",workflowStepNumber:2,workflowStepName:"successful",workflowCompleteFlag:1,walletAddress:{walletAddress:e},workflowErrorCode:{errorCode:errorCode}},console.log("dev-hit-data-layer",arguments),console.log(window.dataLayer.push(arguments))}catch(e){console.log(e.message)}}function swapAmountDataLayer(e){try{window.dataLayer=window.dataLayer||[],errorCode="",arguments={event:"workflowStep",workflowName:"swap",workflowStepNumber:1,workflowStepName:"swapAmount",workflowCompleteFlag:0,workflowErrorCode:{errorCode:errorCode},walletAddress:{walletAddress:e}},console.log("dev-hit-data-layer",arguments),console.log(window.dataLayer.push(arguments))}catch(e){console.error("dev:swapAmountDataLayer failed"),console.error(e.message)}}function confirmTransactionDataLayer(e){try{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"workflowStep",workflowName:"swap",workflowStepNumber:3,workflowStepName:"confirmTransaction",workflowCompleteFlag:0,workflowErrorCode:{errorCode:errorCode},walletAddress:{userAddress:e}})}catch(e){console.error("dev:confirmTransactionDataLayer failed"),console.error(e.message)}}function swapSuccessfulDataLayer(e,o,r,a){try{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"workflowStep",workflowName:"swap",workflowStepNumber:3,workflowStepName:"swapSuccessful",workflowCompleteFlag:1,workflowErrorCode:{errorCode:errorCode},walletAddress:{walletAddress:e},transactionId:{transactionId:o},swapFromCurrency:"BNB",swapFromValue:{BNBValue:r},swapToCurrency:"IBAT",swapToValue:{IBATValue:a}})}catch(e){console.error("dev:swapSuccessfulDataLayer failed"),console.error(e.message)}}
//# sourceMappingURL=index.11956697.js.map
