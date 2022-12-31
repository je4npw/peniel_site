import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { PagesMenu } from "./pagesmenu";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex={1}
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position="fixed"
      width={"100%"}
    >
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} h={"12"}>
          <PagesMenu />
        </Flex>
        <Stack direction={"row"} spacing={10}>
          <Link href={"/"}>
            {colorMode === "light" ? (
              <Image
                h={16}
                src="logo_transparente_preta.png"
                alt="Logo Transparente Preta"
              />
            ) : (
              <Image
                h={16}
                src="logo_transparente_branca.png"
                alt="Logo Transparente Branca"
              />
            )}
          </Link>
        </Stack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode} size={"lg"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
