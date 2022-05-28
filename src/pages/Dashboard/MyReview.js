import React from "react";

const MyReview = () => {
	return (
		<div class='hero min-h-screen'>
			<div class='hero-content flex-col lg:flex-row-reverse'>
				<div class='card w-full max-w-sm shadow-2xl bg-base-100'>
					<div class='card-body'>
						<div class='form-control'>
							<label class='label'>
								<span class='label-text'>Email</span>
							</label>
							<input
								type='text'
								placeholder='email'
								class='input input-bordered'
							/>
						</div>
						<div class='form-control'>
							<label class='label'>
								<span class='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								class='input input-bordered'
							/>
						</div>
						<div class='form-control mt-6'>
							<button class='btn btn-primary'>REVIEW</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyReview;
