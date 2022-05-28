import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyReview = () => {
	const [user, loading] = useAuthState(auth);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = data => {
		const reviewData = {
			review: data.review,
			rating: data.rating,
			userName: user?.displayName,
			userEmail: user?.email,
			date: new Date().toDateString(),
		};

		fetch(`http://localhost:5000/review`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(reviewData),
		})
			.then(res => res.json())
			.then(data => {
				reset();
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Successfully Added Review",
					showConfirmButton: false,
					timer: 1000,
				});
			});
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div class='hero h-full'>
			<div class='hero-content w-full'>
				<div class='card w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} class='card-body'>
						<div class='form-control'>
							<label class='label'>
								<span class='label-text'>Rating</span>
							</label>
							<select
								{...register("rating")}
								class='select select-primary w-full max-w-xs'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</div>
						<div class='form-control'>
							<label class='label'>
								<span class='label-text'>Review Message</span>
							</label>
							<textarea
								{...register("review", { required: true })}
								class='textarea textarea-primary'
								placeholder='Bio'></textarea>
						</div>
						<div class='form-control mt-6'>
							<button class='btn btn-primary'>REVIEW</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MyReview;
