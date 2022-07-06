import React, { useState, useEffect, useTransition } from "react";
import {
	Text,
	Box,
	Flex,
	Heading,
	Divider,
	Stack,
	Button,
} from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate, Navigate } from "react-router-dom";

const Mypage = () => {
	const [user, setUser] = useState<any | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
	}, []);

	const navigate = useNavigate();

	const logout = async () => {
		await signOut(auth);
		navigate("/login/");
	};

	return (
		<>
			{!loading && (
				<>
					{!user ? (
						<Navigate to={`/login/`} />
					) : (
						<>
							<Flex align="center" justify="center" height="100vh">
								<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
									<Heading as="h1" size="lg" textAlign="center">
										マイページ
									</Heading>
									<Divider my={4} />
									<Stack spacing={6} py={4} px={10}>
										<Text fontSize="md" textAlign="center">
											{user?.email}
										</Text>
										<Button
											onClick={logout}
											bg="teal.400"
											color="white"
											_hover={{ opacity: 0.8 }}
										>
											ログアウト
										</Button>
									</Stack>
								</Box>
							</Flex>
						</>
					)}
				</>
			)}
		</>
	);
};

export default Mypage;
