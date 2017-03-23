import React from 'react';
import Link from 'react-router/Link';
import {client} from '../Client';

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
				false ? (
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