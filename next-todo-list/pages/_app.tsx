import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";
import theme from "../src/theme/theme";

type Props = {
	children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
	const isLoading = useAuth();
	return isLoading ? <p>Loading...</p> : children;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<Auth>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />;
				</ChakraProvider>
			</Auth>
		</RecoilRoot>
	);
}

export default MyApp;
