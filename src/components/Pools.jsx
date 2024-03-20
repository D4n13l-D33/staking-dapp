import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { ethers } from 'ethers';
import useStake from '../hooks/useStake'
import HandleStake from './HandleStake';
import useStakeBalance from '../hooks/useStakeBalance';

const Pools = ({id}) => {

    console.log("id in pool", id);

    const handleAmountStaked = Number(useStakeBalance(id));

    const converHandleStake = ethers.formatUnits(handleAmountStaked, 18)

    const handlestakeRate = Number(useStakeBalance(id));

    const converHandlestakeRate = ethers.formatUnits(handlestakeRate, 18)

  return (
            <Card style={{ maxWidth: 600 }}>
        <Flex gap="3" align="center">
            <Avatar
            size="3"
            radius="full"
            fallback={id}
            />
            <Box>
            <Text as="div" size="2" weight="bold">
                Pool{id}
            </Text>
            <Text as="div" size="2" color="gray">
                Amount Staked: {converHandleStake}
            </Text>

            <Text as="div" size="2" color="gray">
                RewardRates: {converHandlestakeRate}
            </Text>

            <HandleStake id={id}/>
            
            </Box>
        </Flex>
        </Card>
  )
}

export default Pools
