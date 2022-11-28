import { useState } from "react";
import { useColorMode, Switch, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Navlinks from "../components/navigation/navlinks";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Navlinks name={"Início"} href="/" label="Início" />
          <Navlinks name={"Sobre"} href="/about" label="Sobre" />
          <Navlinks name={"Contato"} href="/contact" label="Contato" />
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Navlinks name={"Início"} href="/" label="Início" />
          <Navlinks name={"Sobre"} href="/about" label="Sobre" />
          <Navlinks name={"Contato"} href="/contact" label="Contato" />
        </Flex>
      </Flex>
    </Flex>
  );
}
