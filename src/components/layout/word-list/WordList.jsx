import { getItem } from '@/helpers/storage'
import { useGetWordListsQuery } from '@/store/api/api'
import { useDeleteWordListMutation } from '@/store/api/word-list.api'
import { capitalizeFirstLetter, getShortForm } from '@/utils/words.utils'
import { Trash2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import './WordList.css'

function WordList() {
	const { searchTerm } = useSelector(state => state.search)
	const { categoryTerm } = useSelector(state => state.category)

	const args = { categoryTerm, searchTerm }
	const { data } = useGetWordListsQuery(args)

	const [deleteWordList, { isLoading: deleteLoading }] =
		useDeleteWordListMutation()
	const { _id: authorId } = getItem('user')

	return (
		<div className='word-list'>
			<div className='word-list__wrapper'>
				<div className='word-list__names'>
					<span className='word-list__names-item'>English</span>
					<span className='word-list__names-item'>Russian</span>
					<span className='word-list__names-type'>Type</span>
					<span className='word-list__names-item'>Unit</span>
					<span className='word-list__names-delete'></span>
				</div>
				<div className='word-list__lists'>
					{data?.innerData.map(item => (
						<div className='word-list__item' key={item._id}>
							<span className='word-list__item-eng word-list__word'>
								{capitalizeFirstLetter(item.english)}
							</span>
							<span className='word-list__item-rus word-list__word'>
								{capitalizeFirstLetter(item.russian)}
							</span>
							<span className='word-list__item-word-type word-list__word'>
								{getShortForm(item.wordType)}
							</span>
							<span className='word-list__item-unit word-list__word'>
								{capitalizeFirstLetter(item.unit)}
							</span>
							<span
								className={`word-list__item-delete ${
									deleteLoading ? 'disable' : ''
								}`}
							>
								{item.author === authorId ? (
									<button
										disabled={deleteLoading}
										onClick={() => deleteWordList(item._id)}
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
	)
}

export default WordList
