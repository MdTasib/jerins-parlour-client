import React from "react";

const Review = ({ review }) => {
	return (
		<div className='card lg:max-w-lg bg-base-100 shadow-xl'>
			<div className='card-body'>
				<div className='flex items-center'>
					<div className='avatar'>
						<div className='w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5'>
							<img src={review.img} alt='' />
						</div>
					</div>
					<div>
						<h4 className='text-xl font-bold'>{review.name}</h4>
						<p>{review.location}</p>
					</div>
				</div>
				<small>{review.review}</small>
				<div class='rating'>
					<input
						type='radio'
						name='rating-2'
						class='mask mask-star-2 bg-primary'
					/>
					<input
						type='radio'
						name='rating-2'
						class='mask mask-star-2 bg-primary'
						checked
					/>
					<input
						type='radio'
						name='rating-2'
						class='mask mask-star-2 bg-primary'
					/>
					<input
						type='radio'
						name='rating-2'
						class='mask mask-star-2 bg-primary'
					/>
					<input
						type='radio'
						name='rating-2'
						class='mask mask-star-2 bg-primary'
					/>
				</div>
			</div>
		</div>
	);
};

export default Review;
