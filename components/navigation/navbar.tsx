import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { PagesMenu } from "./pagesmenu";
import { UserMenu } from "./usermenu";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={10}>
            <Avatar src="logotipo.png" />
            <PagesMenu />
          </Stack>
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode} size={"lg"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {/* <UserMenu /> */}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
