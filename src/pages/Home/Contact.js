import React from "react";

const Contact = () => {
	return (
		<section className='bg-secondary px-10 py-16'>
			<div className='text-center pb-14'>
				<h2 className='text-2xl font-bold'>
					Let us handle your project,
					<small className='text-primary text-2xl'> professionally.</small>
				</h2>
			</div>
			<div className='grid grid-cols-1 justify-items-center gap-5'>
				<input
					type='text'
					placeholder='Email Address'
					className='input w-full max-w-md'
				/>
				<input
					type='text'
					placeholder='Subject'
					className='input w-full max-w-md'
				/>
				<textarea
					className='textarea w-full max-w-md'
					placeholder='Your message'
					rows={3}></textarea>
				<button className='btn btn-primary'>Submit</button>
			</div>
		</section>
	);
};

export default Contact;
