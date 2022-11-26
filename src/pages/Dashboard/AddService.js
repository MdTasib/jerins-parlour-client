import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddService = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		fetch(
			`https://api.imgbb.com/1/upload?key=eb7bb93d7839539a8bddb41471f7e0da`,
			{
				method: "POST",
				body: formData,
			}
		)
			.then(res => res.json())
			.then(result => {
				const img = result.data.url;
				const uploadProduct = {
					name: data.name,
					description: data.description,
					price: data.price,
					img,
				};

				if (result.success) {
					fetch(`https://jerins-parlour-server-bd.onrender.com/service`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(uploadProduct),
					})
						.then(res => res.json())
						.then(data => {
							reset();
							Swal.fire({
								position: "top-center",
								icon: "success",
								title: "Successfully upload a new product",
								showConfirmButton: false,
								timer: 1500,
							});
						});
				}
			});
	};

	return (
		<div className='hero'>
			<div className='hero-content w-full'>
				<div className='card w-full shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
						<div className='form-control'>
							<div className='grid grid-cols-2'>
								<div>
									<label className='label'>
										<span className='label-text'>Service Name</span>
									</label>
									<input
										{...register("name", { required: true })}
										type='text'
										placeholder='Enter Title'
										className='input input-bordered input-secondary w-full max-w-xs'
									/>
								</div>
								<div>
									<label className='label'>
										<span className='label-text'>Service Name</span>
									</label>

									<div className='flex justify-center items-center w-full'>
										<label
											for='dropzone-file'
											className='flex flex-col justify-center items-center w-full bg-secondary rounded-lg border-2 border-primary border-dashed cursor-pointer dark:hover:bg-primary dark:bg-secondary hover:bg-primary dark:border-secondary dark:hover:border-secondary dark:hover:bg-secondary'>
											<div className='flex flex-col justify-center items-center pt-5 pb-6'>
												<svg
													className='mb-3 w-10 h-10 text-primary'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
												</svg>
												<p className='mb-2 text-sm text-gray-500 dark:text-primary'>
													<span className='font-semibold'>
														Click to upload image
													</span>
												</p>
											</div>
											<input
												{...register("image", { required: true })}
												id='dropzone-file'
												type='file'
												className='hidden'
											/>
										</label>
									</div>
								</div>
							</div>

							<div className='grid grid-cols-2 pt-5'>
								<div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>Description</span>
										</label>
										<textarea
											{...register("description", { required: true })}
											className='textarea textarea-secondary w-full max-w-xs'
											placeholder='Enter Description'></textarea>
									</div>
								</div>
								<div>
									<label className='label'>
										<span className='label-text'>Service Name</span>
									</label>
									<input
										{...register("price", { required: true })}
										type='number'
										placeholder='Enter Price'
										className='input input-bordered input-secondary w-full max-w-xs'
									/>
								</div>
							</div>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>UPLOAD</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddService;
