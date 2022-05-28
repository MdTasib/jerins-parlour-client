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
		fetch(`http://localhost:5000/purchase/${id}`, {
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
			<div class='hero min-h-screen bg-secondary'>
				<div class='hero-content flex-col lg:flex-row-reverse'>
					<div class='text-center lg:text-left'>
						<div class='card w-96 bg-base-100 shadow-xl'>
							<div class='card-body'>
								<Elements stripe={stripePromise}>
									<CheckoutForm service={purchase[0]} />
								</Elements>
							</div>
						</div>
					</div>
					<div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div class='card-body'>
							<div class='form-control'>
								<input
									type='text'
									placeholder={userName}
									class='input input-bordered'
									readOnly
								/>
							</div>
							<div class='form-control'>
								<input
									type='text'
									placeholder={userEmail}
									class='input input-bordered'
									readOnly
								/>
							</div>
							<div class='form-control'>
								<input
									type='text'
									placeholder={name}
									class='input input-bordered'
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
