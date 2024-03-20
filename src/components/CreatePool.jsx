import { Button, Card, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { useState } from "react"
import useCreatepool from "../hooks/useCreatepool";

const CreatePool = () => {
    const [poolRate, setPoolRate] = useState("")

    console.log(poolRate);

    const handleUseCreatePool = useCreatepool(poolRate);

  return (
    
      <Card>
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-blue-600">Create Pool</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Create a new Pool</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                    Input pool rate <details></details>.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Pool Rate
                        </Text>
                        <TextField.Input
                        value={poolRate}
                        onChange={(e) => setPoolRate(e.target.value)}
                        placeholder="123456"
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
                        <Button onClick={handleUseCreatePool} className="bg-blue-600">Create</Button>
                    </Dialog.Close>
                    </Flex>
            </Dialog.Content>
        </Dialog.Root>
      </Card>
  )
}

export default CreatePool
