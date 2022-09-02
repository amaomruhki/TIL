//できてること
//topとcreateページの見た目
//firebaseのデータ読み込み、タスク一覧を表示
//ソート

//できてないこと
//ステータス変更＞変更するとfirebaseには反映されるが、リスト上は更新かけないと反映されない
//削除ボタン＞押すとfirebaseでは削除されるが、リスト上は更新かけないと反映されない

//未実装
//recoil、auth、createページと編集

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
	collection,
	getDocs,
	setDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
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
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState<todo[]>([]);

	useEffect(() => {
		const todosCollectionRef = collection(db, "todos");
		getDocs(todosCollectionRef).then((querySnapshot) => {
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

	useEffect(() => {
		const filteringTodos = () => {
			switch (filter) {
				case "notStarted":
					setFilteredTodos(
						todos.filter((todo) => todo.status === "notStarted")
					);
					break;
				case "doing":
					setFilteredTodos(todos.filter((todo) => todo.status === "doing"));
					break;
				case "done":
					setFilteredTodos(todos.filter((todo) => todo.status === "done"));
					break;
				default:
					setFilteredTodos(todos);
			}
		};
		filteringTodos();
	}, [filter, todos]);

	const statusChange = async (
		todoId: string,
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const status = e.target.value;
		await setDoc(
			doc(db, `todos/${todoId}`),
			{ status: status },
			{ merge: true }
		);
	};

	const deleteTodo = async (todoId: string) => {
		await deleteDoc(doc(db, `todos/${todoId}`));
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
						<Select
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							focusBorderColor="pink.500"
							cursor="pointer"
							w="xs"
						>
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
							{filteredTodos.map((todo) => (
								<HStack key={todo.id}>
									<Text w="100%" p="8px" borderRadius="lg" cursor="pointer">
										{todo.title}
									</Text>
									<Select
										w="xs"
										cursor="pointer"
										value={todo.status}
										focusBorderColor="pink.500"
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
											statusChange(todo.id, e);
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
										onClick={() => deleteTodo(todo.id)}
										//firebaseからは消えるけどリストから消えない
									/>
									<Link href="/Edit">
										<IconButton
											_hover={{
												color: "pink.500",
											}}
											aria-label="Edit"
											icon={<EditIcon />}
											color="gray"
											variant="unstyled"
										/>
									</Link>
								</HStack>
							))}
						</VStack>
					</VStack>
				</VStack>
			</VStack>
		</>
	);
}
