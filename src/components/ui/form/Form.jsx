import { CircleUser } from "lucide-react";

import "./Form.css";

function Form({
	mode,
	error,
	value,
	setValue,
	signUp,
	setFiles,
	signIn,
	signUpLoading,
	signInLoading
}) {
	return (
		<>
			<form className="form" onSubmit={mode === "sign-up" ? signUp : signIn}>
				{mode === "sign-up" ? (
					<input
						type="text"
						placeholder="Name"
						required
						className="form__input"
						value={value.name}
						onChange={e => setValue(p => ({ ...p, name: e.target.value }))}
					/>
				) : (
					<></>
				)}

				<input
					type="text"
					placeholder="Username"
					required
					className="form__input"
					value={value.username}
					onChange={e => setValue(p => ({ ...p, username: e.target.value }))}
				/>

				{mode === "sign-up" ? (
					<input
						type="email"
						placeholder="Email"
						required
						className="form__input"
						value={value.email}
						onChange={e => setValue(p => ({ ...p, email: e.target.value }))}
					/>
				) : (
					<></>
				)}

				<input
					type="password"
					placeholder="Password"
					required
					className="form__input"
					value={value.password}
					onChange={e => setValue(p => ({ ...p, password: e.target.value }))}
					typeof={`${value.password}`}
				/>

				{mode === "sign-up" ? (
					<label htmlFor="form__input-file" className="form__input form__file">
						<input
							type="file"
							required
							onChange={e => setFiles(e.target.files)}
							id="form__input-file"
						/>
						<CircleUser /> <span>Choose avatar</span>
					</label>
				) : (
					<></>
				)}

				<button type="submit" className="form__button">
					{mode === "sign-up"
						? signUpLoading
							? "Loading..."
							: "Sign Up"
						: signInLoading
						? "Loading..."
						: "Sign In"}
				</button>
			</form>
		</>
	);
}
export default Form;
