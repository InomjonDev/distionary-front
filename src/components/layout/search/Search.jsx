import { useActions } from "@/hooks/useActions";

import "./Search.css";

function Search() {
	const { setSearchTerm } = useActions();

	const handleSearchChange = e => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	return (
		<div className="search">
			<div className="search__wrapper">
				<h4 className="search__title">Word List</h4>
				<div className="search__form">
					<input
						type="search"
						className="search__input"
						placeholder="Search words"
						onChange={handleSearchChange}
					/>
				</div>
			</div>
		</div>
	);
}

export default Search;
