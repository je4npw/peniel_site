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

export default function HeaderDefault() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container maxW={"5xl"}>
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
            Responsável pelo Ministério Casa Peniel, é um lugar de encontro com
            Deus, para uma mudança de mente e estilo de vida, com o objetivo de
            treinar e equipar pessoas para o Ministério Cristão.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link href="/about">
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"cyan.300"}
                _hover={{ bg: "cyan.600" }}
              >
                Sobre nós
              </Button>
            </Link>

            <Button onClick={onOpen} rounded={"full"} px={6}>
              Como ajudar
            </Button>
          </Stack>
          <Flex w={"full"}>
            {/* <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          /> */}
          </Flex>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={"white"}>
          <ModalHeader color={"gray.900"}>Ajude com um PIX</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image src="./qrcode.webp" alt="Dan Abramov" />
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="cyan" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
