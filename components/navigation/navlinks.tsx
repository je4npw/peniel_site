import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  name: string;
  href: string;
  label: string;
}

export default function Navlinks({ name, href, label }: Props) {
  return (
    <NextLink href={href} passHref>
      <Button as="a" variant="ghost" aria-label={label} my={5} w="100%">
        {name}
      </Button>
    </NextLink>
  );
}
