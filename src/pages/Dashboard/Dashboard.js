import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
	const [user] = useAuthState(auth);

	return (
		<div className='drawer drawer-mobile'>
			<input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content p-5 bg-accent'>
				{/* <!-- Page content here --> */}
				<Outlet />
			</div>
			<div className='drawer-side z-0'>
				<label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-52 bg-secondary text-base-content'>
					{/* <!-- Sidebar content here --> */}
					{user?.email === "admin@gmail.com" ? (
						<>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/order-list'>Order List</NavLink>
							</li>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/add-service'>Add Service</NavLink>
							</li>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/manage-service'>Manage Service</NavLink>
							</li>
						</>
					) : (
						<>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/book'>Book</NavLink>
							</li>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/book-list'>Book List</NavLink>
							</li>
							<li className='text-primary my-1'>
								<NavLink to='/dashboard/review'>Review</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
