import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import Loading from "../../src/components/Loading";
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
import {
	collection,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
} from "firebase/firestore";
import { todoListState } from "../../src/atoms/todos";
import { db } from "../../src/firebase";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Todo } from "../../src/atoms/todos";

const Edit: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const [todo, setTodo] = useState<Todo | null>(null);

	useEffect(() => {
		if (id !== undefined && typeof id === "string") {
			(async () => {
				const docSnap = await getDoc(doc(db, "todos", id));
				docSnap.exists() && setTodo({ ...(docSnap.data() as Todo) });
			})();
		}
	}, [id]);

	const todosRef = collection(db, "todos");
	const editTodo = async () => {
		if (todo != null && typeof id === "string") {
			await setDoc(
				doc(todosRef, id),
				{
					title: todo.title,
					detail: todo.detail,
				},
				{ merge: true }
			);
		}
	};

	if (todo != null) {
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
							<Heading color="pink.500">Edit Todo</Heading>
						</Center>
						<Text mb="8px">Title</Text>
						<Input
							focusBorderColor="pink.500"
							variant="filled"
							value={todo.title}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setTodo({ ...todo, title: e.target.value });
							}}
						/>
						<Text mb="8px">Detail</Text>
						<Textarea
							focusBorderColor="pink.500"
							variant="filled"
							value={todo.detail}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								setTodo({ ...todo, detail: e.target.value });
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
										onClick={editTodo}
									>
										Edit
									</Button>
								</Link>
							</Flex>
						</Box>
					</VStack>
				</VStack>
			</>
		);
	} else {
		return <Loading />;
	}
};

export default Edit;
