import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/abi.json";
import reward from "../constants/reward.json";



const useCreatepool = (poolRate) => {
    const {chainId} = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const tokens = ethers.parseUnits("400", 18);

  return useCallback(async() =>{
    if (!isSupportedChain(chainId)) return console.error ("Wrong Network");

    console.log("got to return")
    console.log(walletProvider);
    const readWriteProvider = getProvider(walletProvider);
    console.log("got here")
    const signer = await readWriteProvider.getSigner();
    console.log(signer)

    const rewardToken = new ethers.Contract(import.meta.env.VITE_reward_token_address, reward, signer);
    
    const contract = new ethers.Contract(import.meta.env.VITE_contract_address, abi, signer);
    console.log("got here")


    try {

        const approve = await rewardToken.approve(import.meta.env.VITE_contract_address, tokens)
        approve.wait;

        console.log(approve)
       
        const transaction = await contract.createPool(poolRate);
        console.log(transaction);

    } catch (error) {
        console.log(error);
    }
  });
}

export default useCreatepool
