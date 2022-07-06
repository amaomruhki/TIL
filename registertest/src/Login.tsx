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
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const onClickSubmit = async (e: any) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
		} catch (error) {
			alert("メールアドレスまたはパスワードが間違っています");
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
								ログインページ
							</Heading>
							<Divider my={4} />
							<FormControl>
								<Stack spacing={6} py={4} px={10}>
									<Box>
										<FormLabel htmlFor="email">メールアドレス</FormLabel>
										<Input
											name="email"
											type="email"
											value={loginEmail}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
												setLoginEmail(e.target.value)
											}
										/>
									</Box>
									<Box>
										<FormLabel htmlFor="password">パスワード</FormLabel>
										<Input
											name="password"
											type="password"
											value={loginPassword}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
												setLoginPassword(e.target.value)
											}
										/>
									</Box>
									<Button
										onClick={onClickSubmit}
										bg="teal.400"
										color="white"
										_hover={{ opacity: 0.8 }}
									>
										ログイン
									</Button>
									<Text fontSize="md">
										新規登録は
										<Link to={`/register/`}>
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

export default Login;
