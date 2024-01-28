import { useEffect, useState } from "react";

import {
	useCreateSignInMutation,
	useCreateSignUpMutation
} from "@/store/api/user.api";

import { getItem, setItem } from "@/components/ui/helpers/storage";

import { useNavigate } from "react-router-dom";

import Form from "@/components/ui/form/Form";

import "./Sign.css";
import { toast } from "react-toastify";

const initialState = {
	name: "",
	username: "",
	email: "",
	password: ""
};

function Sign() {
	const user = getItem("user");
	const [value, setValue] = useState(initialState);
	const [files, setFiles] = useState([]);
	const [mode, setMode] = useState("sign-in");

	const navigate = useNavigate();
	const [createSignUp, { isLoading: signUpLoading }] =
		useCreateSignUpMutation();
	const [createSignIn, { isLoading: signInLoading }] =
		useCreateSignInMutation();

	useEffect(() => {
		if (user) navigate("/");
	}, [user]);

	const handleSignUp = e => {
		e.preventDefault();
		let newUser = new FormData();
		newUser.append("name", value.name);
		newUser.append("username", value.username);
		newUser.append("email", value.email);
		newUser.append("password", value.password);
		Array.from(files).forEach(i => {
			newUser.append("avatarlar", i, i.name);
		});

		createSignUp(newUser)
			.then(res => {
				setValue(initialState);
				setItem("token", res.data.innerData.token);
				setItem("user", res.data.innerData.user);
				navigate("/");
				toast.success("Account created");
			})
			.catch(err => console.log(err));
	};

	const handleSignIn = e => {
		e.preventDefault();

		let signUser = {
			username: value.username,
			password: value.password
		};

		createSignIn(signUser)
			.then(res => {
				setValue(initialState);
				setItem("token", res.data.innerData.token);
				setItem("user", res.data.innerData.user);
				navigate("/");
			})
			.catch(err => toast.error(err));
	};

	return (
		<div className="container">
			<div className="sign">
				<div className="sign__change">
					<div className="sign__form">
						<div className="sign__toggle">
							<button
								className={`sign__toggle-button ${
									mode === "sign-in" ? "active" : ""
								}`}
								onClick={() => setMode("sign-in")}
							>
								Sign in
							</button>
							<button
								className={`sign__toggle-button ${
									mode === "sign-up" ? "active" : ""
								}`}
								onClick={() => setMode("sign-up")}
							>
								Sign up
							</button>
						</div>
						<Form
							mode={mode}
							value={value}
							setValue={setValue}
							setFiles={setFiles}
							signUp={handleSignUp}
							signIn={handleSignIn}
							signInLoading={signInLoading}
							signUpLoading={signUpLoading}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Sign;
