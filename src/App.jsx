import { Container, Flex, Text } from "@radix-ui/themes";
import Header from "./components/Header";
import { configureWeb3Modal } from "./connection"
import Pools from "./components/Pools";
import CreatePool from "./components/CreatePool";
import usePools from "./hooks/usePools";
import useStakeBalance from "./hooks/useStakeBalance";
import { useState } from "react";

configureWeb3Modal();

function App() {
  

  console.log("My Stake Balance", useStakeBalance(0))

  const poolId = usePools();

  const poolIds = [...Array.from({ length: poolId })].map(
  (_, index) => index
  );

   
  return (
    <Container>
      <main className="mt-6">
      <w3m-button />
        <Header dashboard={
          <Container> 
            
            <CreatePool/>

            <Flex>
              {poolIds.length === 0 ? (<Text> No pool created yet</Text>)
            : (
              poolIds.map((x) => (
                <Pools id={x}/>
              ))
            )  
            }
            
            </Flex>
                        
            </Container>

        } myaccount={
        <Pools/>
        
        }/>
      </main>
    </Container>
     

  )
}

export default App
