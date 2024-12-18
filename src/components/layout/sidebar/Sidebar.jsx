import { Link, useNavigate } from 'react-router-dom'

import { getItem, removeItem } from '@/helpers/storage'
import { useGetUserByIdQuery } from '@/store/api/user.api'

import { Logo, UserView } from '@/components/ui'
import { LogOut, PlusCircle, Users } from 'lucide-react'

import './Sidebar.css'

function Sidebar() {
	const { _id: userId } = getItem('user') || '1'
	const { data } = useGetUserByIdQuery(userId)
	const navigate = useNavigate()

	const logoutHandler = () => {
		const permit = confirm('Log out') ? (
			(removeItem('user'), removeItem('token'), navigate('/'))
		) : (
			<></>
		)
	}

	return (
		<div className='sidebar'>
			<div className='sidebar__wrapper'>
				<div className='sidebar__top'>
					<Logo />
					<Link
						to={`/profile/${data?.innerData?._id}`}
						className='sidebar__top-user'
					>
						<UserView userId={userId} />
					</Link>
				</div>
				<div className='sidebar__main'>
					<ul className='sidebar__main-list'>
						<li>
							<Link to={'/add-word-list'} className='sidebar__main-item'>
								<PlusCircle />
								<span>Add unit words</span>
							</Link>
						</li>
						{data?.innerData?.isAdmin === 'true' ? (
							<li>
								<Link to={'/admin/see-user'} className='sidebar__main-item'>
									<Users />
									<span>See users</span>
								</Link>
							</li>
						) : (
							<></>
						)}
					</ul>
				</div>
				<div className='sidebar__bottom'>
					<button className='sidebar__bottom-button' onClick={logoutHandler}>
						<LogOut />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
