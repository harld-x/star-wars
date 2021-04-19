import PeoplePage from '@containers/PeoplePage/PeoplePage'
import HomePage from '@containers/HomePage/HomePage'
import NotFoundPage from '@containers/NotFoundPage/NotFoundPage'


const routesConfig = [
	{
		path: '/',
		exact: true,
		component: HomePage
	},
	{
		path: '/people',
		exact: true,
		component: PeoplePage
	}, 
	{
		path: '/not-found',
		exact: true,
		component: NotFoundPage
	},
	{
		path: '*',
		exact: false,
		component: NotFoundPage
	}
]


export default routesConfig;