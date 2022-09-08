import { Button, Flex, Heading } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { logout } from "../../lib/auth";

const Header = (): JSX.Element => {
	const handleLogout = (): void => {
		logout().catch((error) => console.error(error));
	};

	return (
		<Flex bg="pink.500" padding={{ base: 3, md: 5 }} justify="space-between">
			<Flex
				as="nav"
				bg="pink.500"
				color="white"
				align="center"
				justify="flex-start"
			>
				<CheckCircleIcon color="white" mr={2} />
				<Heading as="h1" fontSize="2xl">
					TodoList
				</Heading>
			</Flex>
			<Button
				onClick={handleLogout}
				color="white"
				borderColor="white"
				border="1px"
				bg="pink.500"
				variant="solid"
				_hover={{ opacity: 0.8 }}
			>
				Logout
			</Button>
		</Flex>
	);
};

export default Header;
