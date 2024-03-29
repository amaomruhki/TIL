import { useEffect, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
	User,
	getAuth,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../src/firebase";

type UserState = User | null;

const userState = atom<UserState>({
	key: "userState",
	default: null,
	dangerouslyAllowMutability: true,
});

export const login = (): Promise<void> => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth(app);
	return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
	const auth = getAuth(app);
	return signOut(auth);
};

export const useAuth = (): boolean => {
	const [isLoading, setIsLoading] = useState(true);
	const setUser = useSetRecoilState(userState);

	useEffect(() => {
		const auth = getAuth(app);
		return onAuthStateChanged(auth, (user) => {
			setUser(user);
			setIsLoading(false);
		});
	}, [setUser]);

	return isLoading;
};

export const useUser = (): UserState => {
	return useRecoilValue(userState);
};
