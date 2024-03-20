import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { useState } from "react"
import useStake from "../hooks/useStake";

const HandleStake = ({id}) => {
    const [stakeAmount, setStakeAmount] = useState("0");

    const callUseStake = useStake(id, stakeAmount).toString();
     return (
            <Dialog.Root>
        <Dialog.Trigger>
            <Button>Stake</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Stake Tokens</Dialog.Title>
            <Dialog.Description size="2" mb="4">
            Insert Amount of Token You want to Stake
            </Dialog.Description>

            <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                Stake Amount
                </Text>
                <TextField.Input
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter Stake Amount"
                />
            </label>

            </Flex>

            <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                Cancel
                </Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button onClick={()=>{callUseStake}}>Stake</Button>
            </Dialog.Close>
            </Flex>
        </Dialog.Content>
        </Dialog.Root>
  )
}

export default HandleStake
