import { useGetUserQuery } from '@/store/api/api'

import './AdminSeeUsers.css'

function AdminSeeUsers() {
	const { data } = useGetUserQuery()

	console.log(data?.innerData)
	return (
		<div className='see-users'>
			<h2>All users: {data?.innerData?.length}</h2>
			<div className='see-users__wrapper'>
				{data?.innerData?.map(item => (
					<div className='see-users__item'>
						<div className='see-users__img'>
							<img key={item._id} src={item.image[0]} width={100} />
						</div>
						<div className='see-users__name'>{item.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default AdminSeeUsers
