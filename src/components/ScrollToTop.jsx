import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0, // takes us all the way back to the top of the page
			behavior: "smooth"  // keeps it smooth
		});
	};
	
	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			setIsVisible(window.pageYOffset > 500);
		};
		
		window.addEventListener("scroll", toggleVisibility);
		
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	
	return (
		<>
		{isVisible && (
			<div onClick={scrollToTop} className="scroll_up" data-aos="fade-left" data-aos-duration="1200" >
				<img src="/img/arrow-up.svg" alt="scroll up" />
			</div>
		)}
		</>
	);
}