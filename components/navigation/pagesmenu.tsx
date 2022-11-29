import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";

export function PagesMenu() {
  return (
    <Menu isLazy>
      <MenuButton
        boxSize={"inherit"}
        as={IconButton}
        aria-label="Opções"
        icon={<HamburgerIcon />}
        variant="outline"
      />
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
      </MenuList>
    </Menu>
  );
}
