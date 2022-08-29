import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import theme from "../src/theme/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />;
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
