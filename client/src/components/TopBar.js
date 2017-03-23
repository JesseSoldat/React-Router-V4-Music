import React from 'react';
import Link from 'react-router/Link';
import {client} from '../Client';

const TopBar = () => (
	<div className='ui huge top attached fluid secondary menu'>
		<div className='item' />
		<div className='item'>
			<h1 className='ui green header' style={{marginTop: '10px'}}>	
					Notify
			</h1>
		</div>
		
			{
				(client.isLoggedIn()) ? (
					<div className='right menu'>
						<Link className='ui item' to='/albums'>
							Albums
						</Link>
						<Link className='ui item' to='/logout'>
							Logout
						</Link>
					</div>
				) : (
					<div className='right menu'>
						<Link className='ui item' to='/login'>
							Login
						</Link>
					</div>
				)
			}
	
	</div>

);

export default TopBar;