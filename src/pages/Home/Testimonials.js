import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Review from "./Review";

const Testimonials = () => {
	const { data: reviews, isLoading } = useQuery("reviews", () =>
		fetch("https://thawing-peak-76489.herokuapp.com/review").then(res =>
			res.json()
		)
	);

	if (isLoading) {
		return <Loading />;
	}

	const latestReviews = [...reviews].splice(reviews.length - 3, reviews.length);

	return (
		<section className='px-10 py-16'>
			<h2 className='text-center text-3xl font-bold'>Latest Testimonials</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10'>
				{latestReviews.map(review => (
					<Review key={review._id} review={review}></Review>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
