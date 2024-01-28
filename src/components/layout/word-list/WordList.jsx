import { useGetWordListsQuery } from "@/store/api/api";
import "./WordList.css";
import { Trash2 } from "lucide-react";
import { getItem } from "@/components/ui/helpers/storage";
import { useDeleteWordListMutation } from "@/store/api/word-list.api";
import { useSelector } from "react-redux";

function getShortForm(wordType) {
	const wordTypeMappings = {
		noun: "N",
		verb: "V",
		"plural noun": "Pl N",
		adverb: "Adv",
		adjective: "Adj",
		preposition: "Pre",
		pronoun: "Pro"
	};

	return wordTypeMappings[wordType] || "Not Found";
}

function WordList() {
	const { searchTerm } = useSelector(state => state.search);
	const { data } = useGetWordListsQuery(searchTerm);
	const [deleteWordList, { isLoading: deleteLoading }] =
		useDeleteWordListMutation();
	const { _id: authorId } = getItem("user");

	return (
		<div className="word-list">
			<div className="word-list__wrapper">
				<div className="word-list__names">
					<span className="word-list__names-item">English</span>
					<span className="word-list__names-item">Russian</span>
					<span className="word-list__names-type">Type</span>
					<span className="word-list__names-item">Unit</span>
					<span className="word-list__names-delete"></span>
				</div>
				<div className="word-list__lists">
					{data?.innerData.map(item => (
						<div className="word-list__item" key={item._id}>
							<span className="word-list__item-eng word-list__word">
								{`${item.english.charAt(0).toUpperCase()}${item.english.slice(
									1
								)}`}
							</span>
							<span className="word-list__item-rus word-list__word">
								{`${item.russian.charAt(0).toUpperCase()}${item.russian.slice(
									1
								)}`}
							</span>
							<span className="word-list__item-word-type word-list__word">
								{getShortForm(item.wordType)}
							</span>
							<span className="word-list__item-unit word-list__word">
								{item.unit
									? `${item.unit.charAt(0).toUpperCase()}${item.unit.slice(1)}`
									: "Not Found"}
							</span>
							<span
								className={`word-list__item-delete ${
									deleteLoading ? "disable" : ""
								}`}
							>
								{item.author === authorId ? (
									<button
										disabled={deleteLoading}
										onClick={_id => deleteWordList(item._id)}
									>
										<Trash2 />
									</button>
								) : (
									<></>
								)}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WordList;
