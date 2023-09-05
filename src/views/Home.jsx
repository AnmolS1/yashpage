import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Misc from "../components/Misc";
import CallToAction from "../components/CallToAction";

const Home = () => {
	return (
		<div className="home-four">
			<Header />
			<Slider />
			<About />
			<Portfolio />
			<Skills />
			<Misc />
			<CallToAction />
		</div>
	);
};

export default Home;