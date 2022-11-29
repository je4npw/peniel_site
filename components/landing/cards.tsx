import {
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
  imageLink?: string;
  alt?: string;
}

export function VideoCards({ title, text, imageLink, alt }: Props) {
  return (
    <Container maxW={"5xl"} pb={20}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageLink}
          alt={alt}
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{text}</Text>
          </CardBody>
        </Stack>
      </Card>
    </Container>
  );
}
