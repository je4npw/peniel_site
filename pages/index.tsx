import { AspectRatio } from "@chakra-ui/react";
import Footer from "../components/footer/footer";
import { VideoCards } from "../components/landing/cards";
import HeaderDefault from "../components/landing/headerdefault";

export default function Content() {
  return (
    <>
      <HeaderDefault />
      <VideoCards
        title="Lugar de encontro com Deus"
        text="Todo o programa da casa é voltado para que as pessoas atendidas 
        experimentem uma renovação espiritual da mesma forma que Jacó 
        experimentou em Genesis 32:24-30, através da Palavra e da busca de um 
        novo estilo de vida."
        imageLink="imagecard3.jpeg"
        alt="Pessoas estudando a Palavra de Deus"
      />
      <VideoCards
        title="Mudança de mente e estilo de vida"
        text="Entendemos que uma mudança de mente ocorre quando velhos 
        paradigmas são destruídos, e as bases antigas que não deram certo são
        substituídas por novas bases, firmadas na Palavra de Jesus Cristo e na
        doutrina de seus apóstolos."
        imageLink="imagecard1.jpeg"
        alt="Pessoas sendo treinadas"
      />
      <VideoCards
        title="Equipar pessoas para o Ministério Cristão"
        text="Como resultado de uma verdadeira transformação de vida, os 
        atendidos são reinseridos na Igreja e na sociedade para viver a vida 
        cristã, servido e sendo exemplos onde estiverem."
        imageLink="imagecard2.jpeg"
        alt="Pessoas reunidas em uma igreja"
      />
    </>
  );
}
