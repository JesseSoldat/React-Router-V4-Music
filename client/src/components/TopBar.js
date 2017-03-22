import React from 'react';
import Link from 'react-router/Link';

const TopBar = () => (
	<div className='ui huge top attached fluid secondary menu'>
		<div className='item' />
		<div className='item'>
			<h1 className='ui green header' style={{marginTop: '10px'}}>
				Notify
			</h1>
		</div>
		<div className='right menu'>
			{
				true ? (
					<Link className='ui item' to='/'>
						Logout
					</Link>
				) : (
					<Link className='ui item' to='/'>
						Login
					</Link>
				)
			}
		</div>
	</div>

);

export default TopBar;