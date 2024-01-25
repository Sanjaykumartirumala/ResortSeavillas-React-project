/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import logo from'./images/logo1-bg.png';
function Footer() {
  return (
<footer className="footer-distributed">

			<div className="footer-left">

				<h3><img src={logo} alt='logo' /></h3>

				<p className="footer-links">
					<a href="/" className="link-1">Home</a>
					
					<a href="/rooms">Rooms</a>
				
					<a href="/bars">Bar</a>
				
					<a href="/dinning">Dinning</a>
					
					<a href="/about">about</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Sea Villas © 2013</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1 2345 4643 7788</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="SeaVillas@company.com">SeaVillas@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					A resort is a commercial establishment that provides various recreational services and facilities for tourists and travelers.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>
</footer>

  );
}

export default Footer;
