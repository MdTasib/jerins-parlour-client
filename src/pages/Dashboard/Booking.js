import React from "react";

const Booking = ({ book }) => {
	const { img, name, description, status, paid } = book;

	return (
		<div className='card lg:max-w-lg bg-base-100 drop-shadow-md hover:drop-shadow-2xl cursor-pointer'>
			<div className='grid grid-cols-2 items-center pt-5'>
				<div>
					<figure className=''>
						<img src={img} alt='Shoes' className='rounded-xl w-16' />
					</figure>
				</div>
				<div>
					{(!paid || !status) && (
						<button className='btn btn-accent text-white-500 btn-sm'>
							UNPAID
						</button>
					)}
					{status === "pending" && (
						<button className='btn btn-secondary text-primary btn-sm'>
							{status ? status : "UNPAID"}
						</button>
					)}
					{status === "done" && (
						<button className='btn btn-success text-primary btn-sm'>
							{status ? status : "UNPAID"}
						</button>
					)}
				</div>
			</div>

			<div className='card-body items-center'>
				<h2 className='text-1xl font-bold'>{name}</h2>
				<small className='text-primary font-bold text-xl'>
					{/* $ {price} */}
				</small>
				<small>{description}</small>
			</div>
		</div>
	);
};

export default Booking;
