import { Button, Flex, Heading } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { logout } from "../../lib/auth";
import { useUser } from "../../lib/auth";
import { useEffect } from "react";

const Header = () => {
	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (user === null) router.push("/login");
	}, [user]);

	const handleLogout = (): void => {
		logout().catch((error) => console.error(error));
	};

	return (
		<Flex
			padding={{ base: 3, md: 5 }}
			bg="pink.500"
			color="white"
			justify="space-between"
		>
			<Flex justify="flex-start" alignItems="center">
				<CheckCircleIcon color="white" mr={2} />
				<Heading as="h1" fontSize="2xl">
					TodoList
				</Heading>
			</Flex>
			<Flex>
				<Button
					_hover={{
						opacity: "0.65",
					}}
					variant="outline"
					onClick={handleLogout}
					border="2px"
				>
					Logout
				</Button>
			</Flex>
		</Flex>
	);
};

export default Header;
