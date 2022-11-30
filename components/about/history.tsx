import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { objectives } from "../about/abouttexts";

export function History() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text color={useColorModeValue("cyan.600", "cyan.300")} fontSize={"xl"}>
          Ao primeiro dia do mês de Abril de 2021, foi fundada pelo
          Pr°.Cristofer Nunes e Flávia Betiato Nunes, acompanhado de Anderson
          Rafael Marcelino, Franco Moresco, Carla Suelem Nagel, Lucas André
          Inezzi e Maik Dallagno Gregório da Silva, a Associação Missionária
          Peniel.
        </Text>
        <Text color={useColorModeValue("cyan.600", "cyan.300")} fontSize={"xl"}>
          Com sede na cidade de Brusque, na rua Jacó Bauer, n° 666, no bairro
          Jardim Maluche, a Associação tem como premissa o desenvolvimento
          pessoal e comunitário dos associados e atendidos através da:
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {objectives.map((objective) => (
            <HStack key={objective.id} align={"top"}>
              <Box color={"cyan.600"} px={2}>
                <Icon as={InfoOutlineIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"left"}>
                  {objective.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW={"6xl"} mt={10}>
        <Text color={useColorModeValue("cyan.600", "cyan.300")} fontSize={"xl"}>
          Da mesma forma são desenvolvidas, pela Associação, ações
          socioassistenciais aos atendidos e familiares, bem como à pessoas em
          situação de vulnerabilidade social, visando a restauração da
          integralidade do indivíduo e fortalecimento dos seus vínculos sociais,
          com objetivo de promover qualidade de vida aos mesmos.
        </Text>
      </Container>
    </Box>
  );
}
