import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../shared/Loading";

const Book = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const { data: booking, isLoading } = useQuery("booking", () =>
		fetch(`http://localhost:5000/booking/${user?.email}`).then(res =>
			res.json()
		)
	);

	if (isLoading || loading) {
		return <Loading />;
	}

	console.log(booking);

	return (
		<div class='overflow-x-auto'>
			<table class='table w-full'>
				<thead>
					<tr>
						<th>SR</th>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Pay</th>
					</tr>
				</thead>
				<tbody>
					{booking?.map((book, index) => (
						<tr>
							<th>{index + 1}</th>
							<td>
								<div class='avatar'>
									<div class='w-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2'>
										<img src={book.img} alt='' />
									</div>
								</div>
							</td>
							<td>{book.name}</td>
							<td>{book.price}</td>
							<td>
								{book.paid ? (
									<>
										<p class='badge badge-primary'>PAID</p>
										<br />
										<small className='text-green-500'>
											XID : {book.transactionId}
										</small>
									</>
								) : (
									<button
										onClick={() => navigate(`/payment/${book._id}`)}
										className='btn btn-accent btn-sm'>
										PAY
									</button>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Book;
