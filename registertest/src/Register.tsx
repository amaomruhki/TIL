import React, { useState, useEffect } from "react";
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
	Text,
} from "@chakra-ui/react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Navigate, Link } from "react-router-dom";

const Register = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	const onClickSubmit = async (e: any) => {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
		} catch (error) {
			alert("正しく入力してください");
		}
	};

	const [user, setUser] = useState<any | null>(null);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	return (
		<>
			{user ? (
				<Navigate to={`/`} />
			) : (
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
										<Input
											name="password"
											type="password"
											value={registerPassword}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
												setRegisterPassword(e.target.value)
											}
										/>
									</Box>
									<Button
										onClick={onClickSubmit}
										bg="teal.400"
										color="white"
										_hover={{ opacity: 0.8 }}
									>
										登録する
									</Button>
									<Text fontSize="md">
										ログインは
										<Link to={`/login/`}>
											<Text as="u">こちら</Text>
										</Link>
									</Text>
								</Stack>
							</FormControl>
						</Box>
					</Flex>
				</>
			)}
		</>
	);
};

export default Register;
