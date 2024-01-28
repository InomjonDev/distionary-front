import { units, wordTypes } from "@/static";
import "./CreateWordList.css";
import { useCreateWordListMutation } from "@/store/api/word-list.api";
import { useState } from "react";
import { toast } from "react-toastify";

import { getItem } from "@/components/ui/helpers/storage";

const initialState = {
	english: "",
	russian: "",
	wordType: "",
	unit: ""
};

function CreateWordList() {
	const [createWordList, { isLoading }] = useCreateWordListMutation();
	const [value, setValue] = useState(initialState);
	const { _id: author } = getItem("user");

	const handleCreate = e => {
		e.preventDefault();
		Object.assign(value, { author });
		createWordList(value)
			.then(() => {
				setValue(initialState);
			})
			.catch(err => {
				toast.error(err);
			});
	};
	return (
		<div className="create">
			<h2>Add word</h2>
			<div className="create__wrapper">
				<form className="create__form" onSubmit={handleCreate}>
					<input
						type="text"
						placeholder="English"
						required
						value={value.english}
						onChange={e => setValue(p => ({ ...p, english: e.target.value }))}
					/>
					<input
						type="text"
						placeholder="Russian"
						required
						value={value.russian}
						onChange={e => setValue(p => ({ ...p, russian: e.target.value }))}
					/>
					<select
						value={value.wordType}
						onChange={e => setValue(p => ({ ...p, wordType: e.target.value }))}
						required
					>
						<option value="" disabled>
							Choose word type
						</option>
						{wordTypes?.map(i => (
							<option key={i._id} value={i.value}>
								{i.type}
							</option>
						))}
					</select>
					<select
						value={value.unit}
						required
						onChange={e => setValue(p => ({ ...p, unit: e.target.value }))}
					>
						<option value="" disabled>
							Choose unit
						</option>
						{units?.map(i => (
							<option key={i._id} value={i.value}>
								{i.unit}
							</option>
						))}
					</select>

					<button type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Add word"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateWordList;
