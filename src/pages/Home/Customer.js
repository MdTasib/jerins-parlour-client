import React from "react";
import cleanImg from "../../assets/Image/clean.png";

const Customer = () => {
	return (
		<section className='px-10 py-20 hero h-full bg-secondary'>
			<div className='hero-content flex-col lg:flex-row-reverse gap-20'>
				<div className='text-center lg:text-left'>
					<h1 className='text-3xl font-bold'>
						Let us handle your <br />
						screen <span className='text-primary'>Professionally.</span>
					</h1>
					<p className='py-6'>
						With well written codes, we build amazing apps for all platforms,
						mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Purus commodo ipsum.
					</p>
					<div className='grid grid-cols-2'>
						<div>
							<h2 className='text-primary font-bold text-3xl'>500+</h2>
							<small>Happy Customer</small>
						</div>
						<div>
							<h2 className='text-primary font-bold text-3xl'>16+</h2>
							<small>Total Service</small>
						</div>
					</div>
				</div>
				<div className='card  w-full max-w-sm shadow-2xl bg-base-100'>
					<img
						src={cleanImg}
						alt=''
						className='max-w-sm rounded-lg shadow-2xl'
					/>
				</div>
			</div>
		</section>
	);
};

export default Customer;
