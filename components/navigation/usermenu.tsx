import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export function UserMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"md"} src={"https://github.com/je4npw.png"} />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar size={"2xl"} src={"https://github.com/je4npw.png"} />
        </Center>
        <br />
        <Center>
          <p>Je4nPw</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Informações Pessoais</MenuItem>
        <MenuItem>Configurações da Conta</MenuItem>
        <MenuItem>Sair da Aplicação</MenuItem>
      </MenuList>
    </Menu>
  );
}
