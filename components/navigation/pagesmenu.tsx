import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export function PagesMenu() {
  return (
    <Menu isLazy>
      <MenuButton as={Button} w={"16"} h={"12"} aria-label="Site Menu">
        <HamburgerIcon />
      </MenuButton>

      <MenuList>
        <Link href={"/"}>
          <MenuItem>
            <span>Início</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>
            <span>Sobre</span>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link href={"/about"}>
          <MenuItem>
            <span>Youtube</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>
            <span>Facebook</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>
            <span>Instagram</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>
            <span>WhatsApp</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem>
            <span>Twitter</span>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link href={"/about"}>
          <MenuItem>
            <span>Localização</span>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
