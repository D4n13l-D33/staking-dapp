import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/abi.json";



const useStake = (poolId, amount) => {
    const {chainId} = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const tokens = ethers.parseUnits(amount, 18);

  return useCallback(async() =>{
    if (!isSupportedChain(chainId)) return console.error ("Wrong Network");

    console.log("got to return")
    console.log(walletProvider);
    const readWriteProvider = getProvider(walletProvider);
    console.log("got here")
    const signer = await readWriteProvider.getSigner();
    console.log(signer)
    
    const contract = new ethers.Contract(import.meta.env.VITE_contract_address, abi, signer);


    try {
       
        const transaction = await contract.stake(poolId, tokens);
        console.log(transaction);

    } catch (error) {
        console.log(error);
    }
  });
}

export default useStake
