import { Button, Flex, Heading } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { logout } from "../../lib/auth";

const Header = () => {
	const handleLogout = (): void => {
		logout().catch((error) => console.error(error));
	};

	return (
		<Flex
			as="nav"
			bg="pink.500"
			color="white"
			align="center"
			justify="flex-start"
			padding={{ base: 3, md: 5 }}
		>
			<CheckCircleIcon color="white" mr={2} />
			<Heading as="h1" fontSize="2xl">
				TodoList
			</Heading>
			<Button onClick={handleLogout}>Logout</Button>
		</Flex>
	);
};

export default Header;
