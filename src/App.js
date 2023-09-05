import React, { useEffect } from "react";
import Routes from "./Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="home">
			<ScrollToTop />
			<Routes />
		</div>
	);
};

export default App;