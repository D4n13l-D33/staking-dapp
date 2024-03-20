import { Box, Flex, Tabs, Text } from "@radix-ui/themes"

const Header = ({dashboard, myaccount}) => {
  return (
    
    <div className="flex justify-between items-center">
        <h1>Staking DApp</h1>
        <Flex align="center" gap="8" wrap={"wrap"}>
        <Tabs.Root defaultValue="account">
        <Tabs.List>
            <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
            <Tabs.Trigger value="myaccount">My Account</Tabs.Trigger>
            
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
            <Tabs.Content value="dashboard">{dashboard}</Tabs.Content>

            <Tabs.Content value="myaccount">{myaccount}</Tabs.Content>
        </Box>
        </Tabs.Root>
        </Flex>
      
    </div>
  )
}

export default Header
