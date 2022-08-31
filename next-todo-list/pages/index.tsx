import { useState, useEffect } from "react";
import Link from "next/link";
import { useSetRecoilState, useRecoilState } from "recoil";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../src/firebase";
import Header from "../src/components/Header";
import { todoListState } from "../src/atoms/todos";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Text,
	HStack,
	VStack,
	StackDivider,
	IconButton,
	Select,
	Button,
	Flex,
	Spacer,
} from "@chakra-ui/react";

type todo = {
	id: string;
	title: string;
	detail?: string;
	status: "done" | "notStarted" | "doing" | "all";
};

export default function Home(): JSX.Element {
	const [todos, setTodos] = useState<todo[]>([
		{
			id: "",
			title: "",
			detail: "",
			status: "notStarted",
		},
	]);
	const [status, setStatus] = useState("notStarted");

	useEffect(() => {
		const tasksCollectionRef = collection(db, "tasks");
		getDocs(tasksCollectionRef).then((querySnapshot) => {
			setTodos(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					title: doc.data().title,
					detail: doc.data().detail,
					status: doc.data().status,
				}))
			);
		});
	}, []);

	const handleStatusChange = async (
		todoId: string,
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		await setDoc(
			doc(db, `tasks/${todoId}`),
			{ status: e.target.value },
			{ merge: true }
		);
	};

	return (
		<>
			<Header />
			<VStack px={4} py={10} minH="100vh">
				<VStack
					w="100%"
					maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
					gap="2"
					alignItems="stretch"
				>
					<Flex gap="2">
						<Select focusBorderColor="pink.500" cursor="pointer" w="xs">
							<option value="all">All</option>
							<option value="notStarted">Not Started</option>
							<option value="doing">Doing</option>
							<option value="done">Done</option>
						</Select>
						<Spacer />
						<Link href="/create">
							<Button
								as="a"
								bgColor="pink.500"
								color="white"
								_hover={{
									opacity: "0.65",
								}}
							>
								New
							</Button>
						</Link>
					</Flex>
					<VStack py={10} minH="100vh">
						<VStack
							divider={<StackDivider />}
							borderColor="pink.500"
							borderWidth="1px"
							p="5"
							borderRadius="lg"
							w="100%"
							maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
							alignItems="stretch"
						>
							{todos.map((todo) => (
								<HStack key={todo.id}>
									<Text w="100%" p="8px" borderRadius="lg" cursor="pointer">
										{todo.title}
									</Text>
									<Select
										w="xs"
										cursor="pointer"
										value={status}
										focusBorderColor="pink.500"
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
											setStatus(e.target.value);
											handleStatusChange(todo.id, e);
										}}
									>
										<option value="notStarted">Not Started</option>
										<option value="doing">Doing</option>
										<option value="done">Done</option>
									</Select>
									<IconButton
										_hover={{
											color: "pink.500",
										}}
										aria-label="delete"
										icon={<DeleteIcon />}
										variant="unstyled"
									/>
									<IconButton
										_hover={{
											color: "pink.500",
										}}
										aria-label="Edit"
										icon={<EditIcon />}
										color="gray"
										variant="unstyled"
									/>
								</HStack>
							))}
						</VStack>
					</VStack>
				</VStack>
			</VStack>
		</>
	);
}
