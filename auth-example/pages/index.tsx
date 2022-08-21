import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useUser, login, logout } from "../lib/auth";

const Home: NextPage = () => {
	const user = useUser();

	const handleLogin = (): void => {
		login().catch((error) => console.error(error));
	};

	const handleLogout = (): void => {
		logout().catch((error) => console.error(error));
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Auth Example</title>
			</Head>
			<div>
				<h1>Auth Example</h1>
				{user !== null ? <h2>Login now</h2> : <h2>not login</h2>}
				<button onClick={handleLogin}>login</button>
				<button onClick={handleLogout}>logout</button>
			</div>
		</div>
	);
};
export default Home;
