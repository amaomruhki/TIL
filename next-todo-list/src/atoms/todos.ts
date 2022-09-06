import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type Todo = {
	id: string;
	title: string;
	detail?: string;
	status?: "done" | "notStarted" | "doing" | "all";
};

export const todoListState = atom<Todo[]>({
	key: "TodoListState",
	default: [],
	effects_UNSTABLE: [persistAtom],
});
