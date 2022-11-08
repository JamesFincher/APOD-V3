// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout";

type AppProps = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
