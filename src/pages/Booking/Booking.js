import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import bookingImg from "../../assets/Image/booking.jpg";

const Booking = () => {
	const { id } = useParams();
	const { data: service, isLoading } = useQuery("service", () =>
		fetch(`http://localhost:5000/service/${id}`).then(res => res.json())
	);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className='px-10 py-16 bg-secondary'>
			<h2 className='text-center font-bold text-2xl'>
				<small className='text-2xl text-primary'>Booking</small> Service
			</h2>
			<div class='hero h-full'>
				<div class='hero-content flex-col lg:flex-row-reverse gap-20'>
					<div class='text-center lg:text-left'>
						<div class='card w-96 bg-base-100 shadow-xl'>
							<figure>
								<img src={service?.img} className='w-24 pt-5' alt='Shoes' />
							</figure>
							<div class='card-body'>
								<h2 class='card-title'>
									{service?.name}
									<div class='badge badge-primary'>HOT</div>
								</h2>
								<small>{service?.description}</small>
								<div class='card-actions justify-center'>
									<button className='btn w-full btn-primary'>BOOKING</button>
								</div>
							</div>
						</div>
					</div>
					<div class='card  w-full max-w-sm shadow-2xl bg-base-100'>
						<img
							src={bookingImg}
							alt=''
							class='max-w-sm rounded-lg shadow-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Booking;
