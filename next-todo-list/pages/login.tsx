import { UnlockIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Input,
	Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useUser, login } from "../lib/auth";

const Login = (): JSX.Element => {
	const router = useRouter();
	const user = useUser();
	const handleLogin = (): void => {
		login().catch((error) => console.error(error));
		user !== null ? router.push("/") : router.push("/login");
	};

	return (
		<Flex align="center" justify="center" height="100vh">
			<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
				<Heading as="h1" size="lg" textAlign="center" color="pink.500">
					TodoList Login
				</Heading>
				<Divider my={4} />
				<Stack px={10}>
					<Button
						leftIcon={<UnlockIcon />}
						bg="pink.500"
						variant="solid"
						color="white"
						_hover={{ opacity: 0.8 }}
						onClick={handleLogin}
					>
						Login
					</Button>
				</Stack>
			</Box>
		</Flex>
	);
};

export default Login;
