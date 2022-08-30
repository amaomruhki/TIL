import { atom } from "recoil";

export type Todo = {
	id: number;
	title: string;
	detail: string;
	status?: "done" | "notStarted" | "doing" | "all";
};

export const todoListState = atom<Todo[]>({
	key: "TodoListState",
	default: [],
});
