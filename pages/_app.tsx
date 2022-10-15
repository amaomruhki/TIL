import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";
import theme from "../src/theme/theme";
import Loading from "../src/components/Loading";

type Props = { children: any };

const Auth = ({ children: Props }): JSX.Element => {
	const isLoading = useAuth();
	return isLoading ? <Loading /> : children;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Auth>
					<Component {...pageProps} />;
				</Auth>
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
