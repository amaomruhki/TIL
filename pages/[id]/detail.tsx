import Link from "next/link";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import {
	Text,
	VStack,
	Select,
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
	const [todos, setTodos] = useRecoilState(todoListState);
	const router = useRouter();
	const { id } = router.query;
	const [todo, setTodo] = useState<Todo | null>(null);

	useEffect(() => {
		if (id !== undefined) {
			(async () => {
				const docSnap = await getDoc(doc(db, "todos", id as string));
				docSnap.exists() && setTodo({ ...(docSnap.data() as Todo) });
			})();
		}
	}, [id]);

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
							<Heading color="pink.500">Show Todo</Heading>
						</Center>
						<Text fontSize="20px" mb="8px" color="pink.500" as="b">
							Title
						</Text>
						<Text as="b">{todo.title}</Text>
						<Text fontSize="20px" mb="8px" color="pink.500" as="b">
							Detail
						</Text>
						<Text as="b">{todo.detail}</Text>
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
										Back
									</Button>
								</Link>
								<Spacer />
								<Link href={`/${id}/edit`}>
									<Button
										as="a"
										bgColor="pink.500"
										color="white"
										_hover={{
											opacity: "0.65",
										}}
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
		return <h1>no todo</h1>;
	}
};

export default Edit;
