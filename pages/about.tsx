import {
  Box,
  chakra,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { AboutCard } from "../components/about/aboutcard";
import { History } from "../components/about/history";
import { cardsText } from "../components/about/abouttexts";

export default function About() {
  return (
    <Container maxW={"5xl"} pt={14}>
      <Flex
        textAlign={"center"}
        pt={14}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h3
            fontFamily={"DM Sans"}
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Sobre
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={"DM Sans"}
            fontWeight={"bold"}
            color={useColorModeValue("cyan.600", "cyan.300")}
          >
            Associação Missionária Peniel
          </chakra.h1>
          <chakra.h2
            margin={"auto"}
            width={"70%"}
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Jacó chamou àquele lugar &nbsp;
            <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
              Peniel,&nbsp;
            </chakra.strong>
            e disse: <br />
            “Vi Deus face a face, e continuo vivo!”
            <br />
            <chakra.i>Gn 32:20</chakra.i>
          </chakra.h2>
        </Box>
        <History />

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          pb={24}
          mx={"auto"}
        >
          {cardsText.map((cardInfo, index) => (
            <HStack key={cardInfo.id} align={"top"}>
              <AboutCard {...cardInfo} index={index} />
            </HStack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
