import React, {Component} from 'react';

import Redirect from 'react-router/Redirect';

class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	loginInProgress: false,
	  	shouldRedirect: false
	  };
	}

	redirectPath() {
		const locationState = this.props.location.state;
		const pathname = (
			locationState && locationState.from && locationState.from.pathname
		);
		return pathname || '/albums';
	}

	render() {
		if(this.state.shouldRedirect) {
			return (
				<Redirect to={this.redirectPath()} />
			);
		} else {
			return (
				<div className='ui one column centered grid'>
					<div className='ten wide column'>
						<div className='ui raised very padded text container segment'
							style={{textAlign: 'center'}}
						>
							<h2 className='ui green header'>
								Notify
							</h2>
						</div>
					</div>
				</div>

			);
		}
	}
}

export default Login;