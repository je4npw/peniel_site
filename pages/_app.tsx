import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../components/navigation/navbar";
import Footer from "../components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
