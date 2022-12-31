import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FcFaq, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function HelpCard() {
  return (
    <Box p={4}>
      <Heading as="h2" pt={8} pb={16}>
        Outras formas de ajuda:
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcFaq} w={10} h={10} />}
          title={"Sendo um voluntário"}
          text={
            "Participando das reuniões e da dinâmica da casa você tem a \
            oportunidade de conhecer os atendidos e o trabalho desenvolvido \
            na Missão Casa Peniel, agregando conhecimento prático na área de \
            Missões Urbanas"
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Adote uma vaga"}
          text={
            "Atualmente dispomos de 12 vagas de atendimento simultâneas. \
            Converse conosco para adotar uma vaga por um valor de compromisso \
            mensal. Toda ajuda é bem-vinda."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Móveis e eletrodomésticos"}
          text={
            "Para oferecer uma melhor qualidade de vida para os atendidos, \
            precisamos de alguns móveis e eletrodomésticos \
            e também o frete para movimentação dessas doações"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
