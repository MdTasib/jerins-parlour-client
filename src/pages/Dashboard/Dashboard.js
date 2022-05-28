import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/book'>Book</NavLink>
					</li>
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/book-list'>Book List</NavLink>
					</li>
					<li className='text-primary my-1'>
						<NavLink to='/dashboard/review'>Review</NavLink>
					</li>
					{/* {admin && (
        <>
          <li className='text-primary my-1'>
            <Link to='/dashboard/users'>All Users</Link>
          </li>
          <li className='text-primary my-1'>
            <Link to='/dashboard/manageDoctor'>All Doctors</Link>
          </li>
          <li className='text-primary my-1'>
            <Link to='/dashboard/addDoctor'>Add Doctor</Link>
          </li>
        </>
      )} */}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
