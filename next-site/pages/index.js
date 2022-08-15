import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import Header from "./components/Header";
import Styles from "../styles/Home.module.css";
import Content from "./components/Content";

export default function Home() {
	let title = "くろぴょん";
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error } = useSWR("/api/message", fetcher);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<>
			<Content>
				<Head>
					<title>{title}</title>
				</Head>
				<Header title={title} />
				<p>{data.message}</p>
				<div>
					<Link href="/about">
						<a>About</a>
					</Link>
				</div>
				<style jsx>
					{`
						p {
							color: red;
						}
					`}
				</style>
			</Content>
		</>
	);
}
