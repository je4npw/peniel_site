import { Container } from "@chakra-ui/react";
import CallToAction from "../components/help/calltoaction";
import HelpCard from "../components/help/helpcard";
import HelpHeader from "../components/help/helpheader";
export default function Help() {
  return (
    <>
      <Container maxW={"5xl"} pt={28}>
        <HelpHeader />
        <HelpCard />
        <CallToAction />
      </Container>
    </>
  );
}
