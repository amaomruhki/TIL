import Link from "next/link";
import Header from "../src/store/components/Header";
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
import { useState } from "react";

type todo = {
	id: number;
	title: string;
	status: "done" | "notStarted" | "doing" | "all";
};

export default function Home(): JSX.Element {
	const todoList: todo[] = [
		{
			id: 1,
			title: "たまご、豚肉500グラム、トイレットペーパー、サランラップ買う",
			status: "done",
		},
		{ id: 2, title: "子どものお迎え", status: "notStarted" },
		{ id: 3, title: "企画書の提出", status: "doing" },
	];
	console.log(todoList);

	const [todos, setTodos] = useState<todo[]>(todoList);

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
										value={todo.status}
										focusBorderColor="pink.500"
										// onChange={(e) => {
										// 	setTodos([...todos,{...todo,todo.status:e.target.value}]);
										// }}
									>
										<option value="notStarted">Not Started</option>
										<option value="doing">Doing</option>
										<option value="done">Done</option>
									</Select>
									<IconButton
										_hover={{
											opacity: "0.65",
										}}
										aria-label="delete"
										icon={<DeleteIcon />}
										variant="unstyled"
									/>
									<IconButton
										_hover={{
											opacity: "0.65",
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
