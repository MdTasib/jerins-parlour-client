import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import deleteIcon from "../../assets/Icon/delete.png";
import Swal from "sweetalert2";

const ManageService = () => {
	const {
		data: services,
		isLoading,
		refetch,
	} = useQuery("service", () =>
		fetch(`https://jerins-parlour-server-bd.onrender.com/service`).then(res =>
			res.json()
		)
	);

	if (isLoading) {
		return <Loading />;
	}

	const handleDelete = (id, service) => {
		Swal.fire({
			title: "Are you sure?",
			text: `Delete service - ${service}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "rgb(246 60 122)",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`https://jerins-parlour-server-bd.onrender.com/service/${id}`, {
					method: "DELETE",
					headers: {
						"content-type": "application/json",
					},
				})
					.then(res => res.json())
					.then(data => {
						if (data) {
							Swal.fire("Delete!", "Delete Service Successfully", "success");
							refetch();
						}
					});
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
						<th>DELETE</th>
					</tr>
				</thead>
				<tbody>
					{services?.map((service, index) => (
						<tr>
							<th>{index + 1}</th>
							<td>
								<div className='avatar'>
									<div className='w-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2'>
										<img src={service.img} alt='' />
									</div>
								</div>
							</td>
							<td>
								<small>{service.name}</small>
							</td>
							<td>
								<img
									onClick={() => handleDelete(service._id, service.name)}
									src={deleteIcon}
									alt=''
									className='w-12 cursor-pointer'
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageService;
