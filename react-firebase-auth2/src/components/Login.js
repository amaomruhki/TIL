import React from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		signInWithEmailAndPassword(auth, email.value, password.value);
	};

	return (
		<div>
			<h1>ログイン</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>メールアドレス</label>
					<input name="email" type="email" placeholder="email" />
				</div>
				<div>
					<label>パスワード</label>
					<input name="password" type="password" placeholder="password" />
				</div>
				<div>
					<button>ログイン</button>
				</div>
				<div>
					ユーザー登録は<Link to={"/signup"}>こちら</Link>から
				</div>
			</form>
		</div>
	);
};

export default Login;
