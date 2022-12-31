import { Container } from "@chakra-ui/react";
import CallToAction from "../components/help/calltoaction";
import HelpCard from "../components/help/helpcard";
import HelpHeader from "../components/help/helpheader";
export default function Help() {
  return (
    <>
      <Container maxW={"5xl"} pt={28}>
        <HelpHeader />
        <CallToAction
          header="Entre em contato agora pelo WhatsApp"
          buttonText="WPP Pr. Cristofer Nunes"
          buttonLink="https://wa.me/5547984481453?text=Contato+pelo+site.+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+Casa+Peniel."
        />
        <HelpCard />
        <CallToAction
          header="Contamos com sua ajuda!"
          buttonText="Voltar para a Página Principal"
          buttonLink="/"
          text="Agradecemos pela visita ao nosso Site. Divulgue esse trabalho em
          suas redes sociais e siga as nossas, que estão listadas no rodapé
          do site e no menu de navegação. Compartilhe nossos materiais."
        />
      </Container>
    </>
  );
}
