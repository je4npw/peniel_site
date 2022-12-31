import Link from "next/link";
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

interface Props {
  header: string;
  buttonText: string;
  buttonLink: string;
  text?: string;
}

export default function CallToAction({
  header,
  buttonText,
  buttonLink,
  text,
}: Props) {
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
              {header}
            </chakra.h2>
            <Link href={buttonLink}>
              <Button colorScheme="blue" size="md">
                {buttonText}
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>{text}</chakra.p>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
