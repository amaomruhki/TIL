import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";
import theme from "../src/theme/theme";

type Props = {
	children: any;
};

const Auth = ({ children }: Props): JSX.Element => {
	const isLoading = useAuth();
	return isLoading ? (
		<Flex align="center" justify="center" height="100vh">
			<VStack>
				<Spinner color="pink.500" />
				<Text color="pink.500">Loading...</Text>
			</VStack>
		</Flex>
	) : (
		children
	);
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
