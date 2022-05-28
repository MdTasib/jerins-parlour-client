import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../shared/Loading";

const OrderList = () => {
	const {
		data: booking,
		isLoading,
		refetch,
	} = useQuery("booking", () =>
		fetch(`http://localhost:5000/booking`).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	// update purchase product status
	const handleStatusUpdate = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You Shipped This Product",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#f63c7a",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Yes, shipped it!",
		}).then(result => {
			if (result.isConfirmed) {
				const shippedProduct = {
					...booking,
					status: "DONE",
				};

				fetch(`http://localhost:5000/purchase/${id}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(shippedProduct),
				})
					.then(res => res.json())
					.then(data => refetch());
				Swal.fire("Shipped!", "Product has been shipped.", "success");
			}
		});
	};

	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th>SR</th>
						<th>Image</th>
						<th>Name</th>
						<th>User</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{booking?.map((book, index) => (
						<tr>
							<th>{index + 1}</th>
							<td>
								<div className='avatar'>
									<div className='w-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2'>
										<img src={book.img} alt='' />
									</div>
								</div>
							</td>
							<td>
								<small>{book.name}</small>
							</td>
							<td>
								<small>{book.userEmail}</small>
							</td>
							<td>
								{(!book.paid || !book.status) && (
									<small className='bg-accent inline font-bold px-2 py-2 rounded text-blue-500'>
										UNPAID
									</small>
								)}
								{book.paid && book.status === "pending" && (
									<>
										<button className='btn-secondary btn-sm loading btn font-bold px-2 py-2 text-primary mr-2'>
											PENDING
										</button>
										<button
											onClick={() => handleStatusUpdate(book._id)}
											className='btn btn-success text-green-500 btn-sm'>
											SHIPPED
										</button>
									</>
								)}
								{book.paid && book.status === "DONE" && (
									<small className='bg-success inline font-bold px-2 py-2 rounded text-green-500'>
										DONE
									</small>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderList;
