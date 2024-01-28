import { Route, Routes, useLocation } from "react-router-dom";
import { Auth, CreateWordList, Home, Profile, Sign } from "./router";
import { NavigationBar, Sidebar } from "./components/layout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const { pathname } = useLocation();
	return (
		<div className="app">
			{pathname === "/sign" ? <></> : <Sidebar />}

			<Routes>
				<Route path="/sign" element={<Sign />} />
				<Route path="/" element={<Auth />}>
					<Route path="/" element={<Home />} />
					<Route path="/add-word-list" element={<CreateWordList />} />
					<Route path="/profile/:userId" element={<Profile />} />
				</Route>
			</Routes>

			{pathname === "/sign" ? <></> : <NavigationBar />}

			<ToastContainer theme="dark" />
		</div>
	);
}

export default App;
