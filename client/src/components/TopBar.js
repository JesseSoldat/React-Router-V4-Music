import React from 'react';
import Link from 'react-router/Link';

const TopBar = () => (
	<div className='ui huge top attached fluid secondary menu'>
		<div className='item' />
		<div className='item'>
			<h1 style={{marginTop: '10px'}}>
				<Link className='ui green header' to='/'>
					Notify
				</Link>
			</h1>
		</div>
		
			{
				true ? (
					<div className='right menu'>
						<Link className='ui item' to='/albums'>
							Albums
						</Link>
						<Link className='ui item' to='/'>
							Logout
						</Link>
					</div>
				) : (
					<div className='right menu'>
						<Link className='ui item' to='/'>
							Login
						</Link>
					</div>
				)
			}
	
	</div>

);

export default TopBar;