import { Search, WordList } from "@/components/layout";

import { Logo } from "@/components/ui";

import "./Home.css";

function Home() {
	return (
		<div className="home">
			<div className="home-logo">
				<Logo />
			</div>
			<Search />
			<WordList />
		</div>
	);
}

export default Home;
