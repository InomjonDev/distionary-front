import "./Search.css";

function Search() {
	return (
		<div className="search">
			<div className="search__wrapper">
				<h4 className="search__title">Word List</h4>
				<div className="search__form">
					<input
						type="search"
						className="search__input"
						placeholder="Search words"
					/>
				</div>
			</div>
		</div>
	);
}

export default Search;
