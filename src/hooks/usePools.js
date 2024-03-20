import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import abi from "../constants/abi.json";

const usePools = () => {
  const {chainId} = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [Data, setData] = useState(0)

  let poolrealID 

   useEffect(() => {
        (async () => {
            
          if (!isSupportedChain(chainId)) return console.error ("Wrong Network");
          const readWriteProvider = getProvider(walletProvider);
          const signer = await readWriteProvider.getSigner();
          const contract = new ethers.Contract(import.meta.env.VITE_contract_address, abi, signer);


          try {
           
              const transaction = await contract.id();
              poolrealID = Number(transaction);

              setData(poolrealID);

          } catch (error) {
              console.log(error);
          }


              })();
          }, [chainId]);

          console.log("got here")

          
        
          return Data
};

export default usePools;