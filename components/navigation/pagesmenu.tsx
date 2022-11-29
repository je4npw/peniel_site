import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  FaHome,
  FaBuffer,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
  FaSpotify,
} from "react-icons/fa";

export function PagesMenu() {
  return (
    <Menu isLazy>
      <MenuButton as={Button} w={"16"} h={"12"} aria-label="Site Menu">
        <HamburgerIcon />
      </MenuButton>

      <MenuList>
        <Link href={"/"}>
          <MenuItem icon={<FaHome />}>
            <span>Início</span>
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem icon={<FaBuffer />}>
            <span>Sobre</span>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Text p={3}>Redes Sociais Peniel</Text>
        <Link
          href={"https://www.youtube.com/@prcristofernunes"}
          target={"_blank"}
        >
          <MenuItem icon={<FaYoutube />}>
            <span>Youtube</span>
          </MenuItem>
        </Link>
        <Link
          href={"https://www.facebook.com/ministeriocasapeniel"}
          target={"_blank"}
        >
          <MenuItem icon={<FaFacebook />}>
            <span>Facebook</span>
          </MenuItem>
        </Link>
        <Link
          href={"https://www.instagram.com/missao.peniel/"}
          target={"_blank"}
        >
          <MenuItem icon={<FaInstagram />}>
            <span>Instagram</span>
          </MenuItem>
        </Link>
        <Link
          href={
            "https://wa.me/5547984481453?text=Contato+pelo+site.+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+Casa+Peniel."
          }
          target={"_blank"}
        >
          <MenuItem icon={<FaWhatsapp />}>
            <span>WhatsApp</span>
          </MenuItem>
        </Link>
        <Link href={"https://twitter.com/pr_cristofer_n"} target={"_blank"}>
          <MenuItem icon={<FaTwitter />}>
            <span>Twitter</span>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Text p={3}>Redes Sociais Pr. Cristofer Nunes</Text>
        <Link
          href={"https://www.facebook.com/cristofer.nunes.180"}
          target={"_blank"}
        >
          <MenuItem icon={<FaFacebook />}>
            <span>Facebook</span>
          </MenuItem>
        </Link>
        <Link
          href={"https://www.instagram.com/cristofer_nunes_/"}
          target={"_blank"}
        >
          <MenuItem icon={<FaInstagram />}>
            <span>Instagram</span>
          </MenuItem>
        </Link>
        <Link
          href={"https://open.spotify.com/show/3k7j2ActoVZqc6y5GdvDmK"}
          target={"_blank"}
        >
          <MenuItem icon={<FaSpotify />}>
            <span>Spotify</span>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link
          href={
            "https://www.google.com/maps/place/Minist%C3%A9rio+Casa+Peniel/@-27.1020262,-48.9309688,15z/data=!4m5!3m4!1s0x0:0x5b47215e166ab45f!8m2!3d-27.1020262!4d-48.9309688?hl=pt-BR"
          }
          target={"_blank"}
        >
          <MenuItem icon={<FaLocationArrow />}>
            <span>Localização</span>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
