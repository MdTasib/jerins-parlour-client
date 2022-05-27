import React from "react";
import headerImg from "../../assets/Image/headerImg.png";

const Header = () => {
	return (
		<header class='hero h-full bg-secondary'>
			<div class='p-10 hero-content flex-col lg:flex-row-reverse'>
				<img src={headerImg} alt='' class='max-w-sm rounded-lg shadow-2xl' />
				<div>
					<h1 class='text-3xl font-bold'>
						BEAUTY SALON <br />
						FOR EVERY WOMEN
					</h1>
					<p class='py-6'>
						Beauty salons have proven to be a recession-proof industry across
						United States. Although sales had declined from 2008 highs due to
						the Great Recession, they remain robust with long term positive
						forecast
					</p>
					<button class='btn btn-primary'>Get an Appointment</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
