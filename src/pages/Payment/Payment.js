import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
	const { id } = useParams();
	const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
		fetch(`https://jerins-parlour-server-bd.onrender.com/purchase/${id}`, {
			method: "GET",
		}).then(res => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	const { name, userName, userEmail } = purchase[0];

	const stripePromise = loadStripe(
		"pk_test_51IeAZaFLS713LSSjm5z39rde0Dw558BCbCNNKnHZznQzN9khB8LRy5SdjLKzazWus6sKcNwr70ajIgGmWBloqgCy00pmDjThkv"
	);

	return (
		<>
			<div className='hero min-h-screen bg-secondary'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<div className='card w-96 bg-base-100 shadow-xl'>
							<div className='card-body'>
								<Elements stripe={stripePromise}>
									<CheckoutForm service={purchase[0]} />
								</Elements>
							</div>
						</div>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div className='card-body'>
							<div className='form-control'>
								<input
									type='text'
									placeholder={userName}
									className='input input-bordered'
									readOnly
								/>
							</div>
							<div className='form-control'>
								<input
									type='text'
									placeholder={userEmail}
									className='input input-bordered'
									readOnly
								/>
							</div>
							<div className='form-control'>
								<input
									type='text'
									placeholder={name}
									className='input input-bordered'
									readOnly
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
