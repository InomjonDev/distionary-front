import { getItem } from '@/helpers/storage'
import { getNavItemClass } from '@/utils/navigationbar.utils'
import { Home, PlusCircle, User2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './NavigationBar.css'

function NavigationBar() {
	const { _id: userId } = getItem('user') || '1'
	const { pathname } = useLocation()

	return (
		<div className='navigation-bar'>
			<div className='navigation-bar__wrapper'>
				<ul className='navigation-bar__list'>
					<li className={getNavItemClass('/', pathname)}>
						<Link to={'/'}>
							<Home />
						</Link>
					</li>
					<li className={getNavItemClass('/add-word-list', pathname)}>
						<Link to={'/add-word-list'}>
							<PlusCircle />
						</Link>
					</li>
					<li className={getNavItemClass(`/profile/${userId}`, pathname)}>
						<Link to={`/profile/${userId}`}>
							<User2 />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavigationBar
