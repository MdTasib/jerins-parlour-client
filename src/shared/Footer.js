/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
	return (
		<footer className='px-10 py-10 bg-primary text-white'>
			<div className='footer'>
				<div>
					<span className='footer-title'>Services</span>
					<a className='link link-hover'>Branding</a>
					<a className='link link-hover'>Design</a>
					<a className='link link-hover'>Marketing</a>
					<a className='link link-hover'>Advertisement</a>
				</div>
				<div>
					<span className='footer-title'>Company</span>
					<a className='link link-hover'>About us</a>
					<a className='link link-hover'>Contact</a>
					<a className='link link-hover'>Jobs</a>
					<a className='link link-hover'>Press kit</a>
				</div>
				<div>
					<span className='footer-title'>Legal</span>
					<a className='link link-hover'>Terms of use</a>
					<a className='link link-hover'>Privacy policy</a>
					<a className='link link-hover'>Cookie policy</a>
				</div>
			</div>
			<div className='mt-10 text-center'>
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
