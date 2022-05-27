import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Image/logo.png";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<NavLink className='mx-1 py-1' to='/home'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/services'>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/contact'>
					Contact
				</NavLink>
			</li>
			<Link to='/login' class='btn btn-sm btn-primary'>
				Log In
			</Link>
		</>
	);

	return (
		<div class='navbar bg-secondary px-10'>
			<div class='navbar-start'>
				<div class='dropdown'>
					<label tabindex='0' class='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabindex='0'
						class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
						{menuItems}
					</ul>
				</div>
				<Link to='/' class=''>
					<img src={logo} alt='' className='w-24' />
				</Link>
			</div>
			<div class='navbar-end hidden lg:flex'>
				<ul class='menu menu-horizontal p-0'>{menuItems}</ul>
			</div>
		</div>
	);
};

export default Navbar;
