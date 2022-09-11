import { Flex, VStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
	return (
		<Flex align="center" justify="center" height="100vh">
			<VStack>
				<Spinner color="pink.500" />
				<Text color="pink.500">Loading...</Text>
			</VStack>
		</Flex>
	);
};

export default Loading;
