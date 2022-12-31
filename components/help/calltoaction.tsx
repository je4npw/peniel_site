import {
  Box,
  VStack,
  Button,
  Flex,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} pb={16}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Contamos com sua ajuda!
            </chakra.h2>
            <Link href="/">
              <Button colorScheme="blue" size="md">
                Voltar para a Página Principal
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Agradecemos pela visita ao nosso Site. Divulgue esse trabalho em
              suas redes sociais e siga as nossas, que estão listadas no rodapé
              do site e no menu de navegação. Compartilhe nossos materiais.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
