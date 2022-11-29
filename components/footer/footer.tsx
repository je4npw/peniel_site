import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link href="https://github.com/je4npw" target={"_blank"}>
          <Text>© Je4nPw</Text>
        </Link>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/@prcristofernunes"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/missao.peniel/"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label="Facebook"
            href="https://www.facebook.com/ministeriocasapeniel"
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/pr_cristofer_n"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"WhatsApp"}
            href={
              "https://wa.me/5547984481453?text=Contato+pelo+site.+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+Casa+Peniel."
            }
          >
            <FaWhatsapp />
          </SocialButton>
          <SocialButton
            label={"Localização"}
            href={
              "https://www.google.com/maps/place/Minist%C3%A9rio+Casa+Peniel/@-27.1020262,-48.9309688,15z/data=!4m5!3m4!1s0x0:0x5b47215e166ab45f!8m2!3d-27.1020262!4d-48.9309688?hl=pt-BR"
            }
          >
            <FaLocationArrow />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
