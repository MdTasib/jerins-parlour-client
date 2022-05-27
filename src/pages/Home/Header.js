import React from "react";
import headerImg from "../../assets/Image/headerImg.png";

const Header = () => {
	return (
		<header class='hero h-full bg-secondary'>
			<div class='p-10 hero-content flex-col lg:flex-row-reverse'>
				<img src={headerImg} alt='' class='max-w-sm rounded-lg shadow-2xl' />
				<div>
					<h1 class='text-4xl font-bold'>
						BEAUTY SALON <br />
						FOR EVERY WOMEN
					</h1>
					<p class='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button class='btn btn-primary'>Get an Appointment</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
