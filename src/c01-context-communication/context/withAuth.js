import CurrentUser from './CurrentUser'


export default function withAuth(Component) {
	return function (props) {
		  return (
			  <CurrentUser.Consumer>
				  {
					  (userProps) => (<Component {...props} auth={userProps} />)
				  }
			  </CurrentUser.Consumer>
		  )
	}
}
