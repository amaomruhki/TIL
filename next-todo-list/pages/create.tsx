import Link from "next/link";
import Header from "../src/store/components/Header";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Text,
	HStack,
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

const Create = () => {
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
					/>
					<Text mb="8px">Detail</Text>
					<Textarea
						placeholder="Detail"
						focusBorderColor="pink.500"
						variant="filled"
					/>
					<Text mb="8px">Priority</Text>
					<Select
						w="xs"
						cursor="pointer"
						focusBorderColor="pink.500"
						variant="filled"
					>
						<option value="notStarted">Not Started</option>
						<option value="doing">Doing</option>
						<option value="done">Done</option>
					</Select>
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
