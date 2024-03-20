import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/abi.json";

const useStakeRate = (poolId) => {
  const {chainId} = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [Data, setData] = useState("0")

  let balance 

   useEffect(() => {
        (async () => {
            
          if (!isSupportedChain(chainId)) return console.error ("Wrong Network");
          const readWriteProvider = getProvider(walletProvider);
          const signer = await readWriteProvider.getSigner();
          const contract = new ethers.Contract(import.meta.env.VITE_contract_address, abi, signer);


          try {
           
              const transaction = await contract.getUserPoolRewardPerSec(poolId, signer.address);
              balance = Number(transaction);

              setData(balance);

          } catch (error) {
              console.log(error);
          }


              })();
          }, [chainId]);

          console.log("got here")

          
        
          return Data
};

export default useStakeBalance;