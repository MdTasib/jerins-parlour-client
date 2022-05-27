import React from "react";
import people1 from "../../assets/Image/1.png";
import people2 from "../../assets/Image/2.png";
import people3 from "../../assets/Image/3.png";
import Review from "./Review";

const Testimonials = () => {
	const reviews = [
		{
			_id: 1,
			name: "Winson Herry",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
			location: "california",
			img: people1,
		},
		{
			_id: 2,
			name: "Winson Herry",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
			location: "california",
			img: people2,
		},
		{
			_id: 3,
			name: "Winson Herry",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
			location: "california",
			img: people3,
		},
	];

	return (
		<div className='px-10 py-16'>
			<h2 className='text-center text-3xl font-bold'>Testimonials</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10'>
				{reviews.map(review => (
					<Review key={review._id} review={review}></Review>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
