import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const status = ["done", "notStarted", "doing", "all"] as const;

export type StatusType = typeof status[number];

export type Todo = {
	id: string;
	title: string;
	detail?: string;
	status: StatusType;
};

export const todoListState = atom<Todo[]>({
	key: "TodoListState",
	default: [],
	effects_UNSTABLE: [persistAtom],
});
