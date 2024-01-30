import { useActions } from "@/hooks/useActions";

import { units } from "@/static";

import "./Category.css";

function Category() {
	const { setCategoryTerm } = useActions();

	const handleCategoryChange = e => {
		const categoryTerm = e.target.value;
		setCategoryTerm(categoryTerm);
	};

	return (
		<select onChange={handleCategoryChange}>
			<option value="">Choose unit</option>
			{units.map(i => (
				<option key={i._id} value={i.value}>
					{i.unit}
				</option>
			))}
		</select>
	);
}

export default Category;
