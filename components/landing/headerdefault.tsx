import Link from "next/link";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

const Overlay = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export default function HeaderDefault() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<Overlay />);
  return (
    <>
      <Container maxW={"5xl"} pt={14}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Associação Missionária <br />
            <Text as={"span"} color={"cyan.300"}>
              Casa Peniel
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"} fontSize="xl">
            A Associação é a responsável pelo Ministério Casa Peniel, que é um
            lugar de encontro Deus, para uma mudança de mente e estilo de vida,
            com o objetivo de treinar e equipar pessoas para o Ministério
            Cristão.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link href="/about">
              <Button
                colorScheme={"cyan"}
                bg={"cyan.300"}
                _hover={{ bg: "cyan.600" }}
              >
                Sobre nós
              </Button>
            </Link>

            <Button
              onClick={() => {
                setOverlay(<Overlay />);
                onOpen();
              }}
              colorScheme={"blue"}
            >
              Como ajudar
            </Button>
          </Stack>
          <Flex w={"full"}>
            <Image borderRadius={"md"} src="capa.jpg" alt="Capa Peniel" />
          </Flex>
        </Stack>
      </Container>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xs"}>
        {overlay}
        <ModalContent background={"white"}>
          <ModalHeader color={"gray.900"}>Ajude fazendo um PIX</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image src="./qrcode.webp" alt="Qrcode para Pix" />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="cyan" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Link href={"/help"}>
              <Button colorScheme={"blue"} mr={3}>
                Mais
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
