import Link from "next/link";
// import { useSetRecoilState } from "recoil";
import Header from "../src/components/Header";
import {
	Text,
	VStack,
	Button,
	Input,
	Textarea,
	Center,
	Spacer,
	Flex,
	Box,
	Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { todoListState } from "../src/atoms/todos";
import { db } from "../src/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useUser, login } from "../lib/auth";
import { useRouter } from "next/router";

const Create = () => {
	const [inputTitle, setInputTitle] = useState("");
	const [inputDetail, setInputDetail] = useState("");
	// const setTodoList = useSetRecoilState(todoListState);

	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (user === null) router.push("/login");
	}, [user]);

	const addTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
		await addDoc(collection(db, "todos"), {
			title: inputTitle,
			detail: inputDetail,
			status: "notStarted",
		});
		setInputTitle("");
		setInputDetail("");
	};

	return (
		<>
			<Header />
			<VStack px={4} py={5} minH="100vh">
				<VStack
					w="100%"
					maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
					gap="2"
					alignItems="stretch"
				>
					<Center>
						<Heading color="pink.500">Create Todo</Heading>
					</Center>
					<Text mb="8px">Title</Text>
					<Input
						placeholder="Title"
						focusBorderColor="pink.500"
						variant="filled"
						type="text"
						value={inputTitle}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInputTitle(e.target.value);
						}}
					/>
					<Text mb="8px">Detail</Text>
					<Textarea
						placeholder="Detail"
						focusBorderColor="pink.500"
						variant="filled"
						value={inputDetail}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
							setInputDetail(e.target.value);
						}}
					/>
					<Box py={10}>
						<Flex
							align="right"
							minWidth="max-content"
							alignItems="center"
							gap="2"
						>
							<Link href="/">
								<Button
									as="a"
									bgColor="gray.500"
									color="white"
									_hover={{
										opacity: "0.65",
									}}
								>
									Cancel
								</Button>
							</Link>
							<Spacer />
							<Link href="/">
								<Button
									as="a"
									bgColor="pink.500"
									color="white"
									_hover={{
										opacity: "0.65",
									}}
									disabled={!inputTitle}
									onClick={addTodo}
								>
									Create
								</Button>
							</Link>
						</Flex>
					</Box>
				</VStack>
			</VStack>
		</>
	);
};

export default Create;
