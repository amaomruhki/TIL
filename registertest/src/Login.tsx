import {
	Box,
	Flex,
	Heading,
	Divider,
	Stack,
	Button,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
	return (
		<>
			<Flex align="center" justify="center" height="100vh">
				<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading as="h1" size="lg" textAlign="center">
						ログインページ
					</Heading>
					<Divider my={4} />
					<FormControl>
						<Stack spacing={6} py={4} px={10}>
							<Box>
								<FormLabel htmlFor="email">メールアドレス</FormLabel>
								<Input name="email" type="email" />
							</Box>
							<Box>
								<FormLabel htmlFor="password">パスワード</FormLabel>
								<Input name="password" type="password" />
							</Box>
							<Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
								ログイン
							</Button>
						</Stack>
					</FormControl>
				</Box>
			</Flex>
		</>
	);
};

export default Login;
