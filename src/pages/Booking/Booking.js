import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import bookingImg from "../../assets/Image/booking.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const Booking = () => {
	const { id } = useParams();
	const [user, loading] = useAuthState(auth);
	const { data: service, isLoading } = useQuery("service", () =>
		fetch(`http://localhost:5000/service/${id}`).then(res => res.json())
	);

	if (loading || isLoading) {
		<Loading />;
	}

	const handleBooking = () => {
		const booking = {
			name: service?.name,
			price: service?.price,
			description: service?.description,
			img: service?.img,
			userName: user?.displayName,
			userEmail: user?.email,
		};
		Swal.fire({
			title: "Are you sure?",
			text: `Booking service - ${service?.name}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "rgb(246 60 122)",
			cancelButtonColor: "#d33",
			confirmButtonText: "Booking",
		}).then(result => {
			if (result.isConfirmed) {
				fetch("http://localhost:5000/booking", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(booking),
				})
					.then(res => res.json())
					.then(data => {
						if (data) {
							Swal.fire("Booked!", "Your Booking Successfull", "success");
						}
					});
			}
		});
	};

	return (
		<section className='px-10 py-16 bg-secondary'>
			<h2 className='text-center font-bold text-2xl'>
				<small className='text-2xl text-primary'>Booking</small> Service
			</h2>
			<div className='hero h-full'>
				<div className='hero-content flex-col lg:flex-row-reverse gap-20'>
					<div className='text-center lg:text-left'>
						<div className='card w-96 bg-base-100 shadow-xl'>
							<figure>
								<img src={service?.img} className='w-24 pt-5' alt='Shoes' />
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>
									{service?.name}
									<div className='badge badge-primary'>HOT</div>
								</h2>
								<small>{service?.description}</small>
								<div className='card-actions justify-center'>
									<button
										onClick={handleBooking}
										className='btn w-full btn-primary'>
										BOOKING
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='card  w-full max-w-sm shadow-2xl bg-base-100'>
						<img
							src={bookingImg}
							alt=''
							className='max-w-sm rounded-lg shadow-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
