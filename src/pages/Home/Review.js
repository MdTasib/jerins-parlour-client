import React from "react";
import ster from "../../assets/Icon/ster.png";

const Review = ({ review }) => {
	return (
		<div className='card lg:max-w-lg bg-base-100 shadow-xl'>
			<div className='card-body'>
				<div className='flex items-center'>
					<div class='avatar placeholder'>
						<div class='bg-secondary text-primary rounded-full w-16'>
							<span class='text-2xl uppercase font-bold'>
								{review.userEmail.slice(0, 1)}
							</span>
						</div>
					</div>
					<div>
						<h4 className='text-1xl font-bold ml-2'>{review.userName}</h4>
					</div>
				</div>
				<small>{review.review}</small>
				<div className='pt-2 flex'>
					{[...Array(Number(review.rating))].map((star, index) => (
						<img key={index} src={ster} alt='' className='mr-1 w-4' />
					))}
				</div>
			</div>
		</div>
	);
};

export default Review;
