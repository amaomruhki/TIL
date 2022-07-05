import React from "react";
import { Box, Flex, Heading, Divider, Stack, Button } from "@chakra-ui/react";

const Mypage = () => {
	return (
		<>
			<Flex align="center" justify="center" height="100vh">
				<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading as="h1" size="lg" textAlign="center">
						マイページ
					</Heading>
					<Divider my={4} />
					<Stack spacing={6} py={4} px={10}>
						<Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
							ログアウト
						</Button>
					</Stack>
				</Box>
			</Flex>
		</>
	);
};

export default Mypage;
