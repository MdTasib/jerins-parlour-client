import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Booking from "./Booking";

const BookList = () => {
	const [user, loading] = useAuthState(auth);
	const { data: booking, isLoading } = useQuery("booking", () =>
		fetch(
			`https://jerins-parlour-server-bd.onrender.com/booking/${user?.email}`
		).then(res => res.json())
	);

	if (isLoading || loading) {
		return <Loading />;
	}

	console.log(booking);

	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 py-10'>
			{booking?.map(book => (
				<Booking key={book._id} book={book}></Booking>
			))}
		</div>
	);
};

export default BookList;
