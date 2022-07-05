import React, { useState } from "react";
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

const Register = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	return (
		<>
			<Flex align="center" justify="center" height="100vh">
				<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading as="h1" size="lg" textAlign="center">
						新規登録
					</Heading>
					<Divider my={4} />
					<FormControl>
						<Stack spacing={6} py={4} px={10}>
							<Box>
								<FormLabel htmlFor="email">メールアドレス</FormLabel>
								<Input
									name="email"
									type="email"
									value={registerEmail}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										setRegisterEmail(e.target.value)
									}
								/>
							</Box>
							<Box>
								<FormLabel htmlFor="password">パスワード</FormLabel>
								<Input name="password" type="password" />
							</Box>
							<Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
								登録する
							</Button>
						</Stack>
					</FormControl>
				</Box>
			</Flex>
		</>
	);
};

export default Register;
