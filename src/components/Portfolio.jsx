import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All", "Research", "Projects", "Cool Stuff"];

const tabListContent = [
	{
		porftoliItems: [
			{
				img: "ml",
				title: "SpamTraining",
				meta: "Research",
				portfolioLink: "https://github.com/AnmolS1/SpamTraining",
				delayAnimation: "0",
			},
			{
				img: "study",
				title: "SpamStudy",
				meta: "Research",
				portfolioLink: "https://github.com/AnmolS1/SpamStudy",
				delayAnimation: "100",
			},
			{
				img: "notion",
				title: "NotionExt",
				meta: "Projects",
				portfolioLink: "https://github.com/AnmolS1/NotionExt",
				delayAnimation: "200",
			},
			{
				img: "college",
				title: "PreReq",
				meta: "Projects",
				portfolioLink: "https://github.com/AnmolS1/PreReq",
				delayAnimation: "0",
			},
			{
				img: "audio",
				title: "AudioVisualizer",
				meta: "Cool Stuff",
				portfolioLink: "https://github.com/AnmolS1/audio_visualizer",
				delayAnimation: "100",
			},
			{
				img: "parking",
				title: "ParkingSystem",
				meta: "Cool Stuff",
				portfolioLink: "https://github.com/AnmolS1/ParkingSystem",
				delayAnimation: "200",
			}
		]
	},
	{
		porftoliItems: [
			{
				img: "ml",
				title: "SpamTraining",
				meta: "Research",
				portfolioLink: "https://github.com/AnmolS1/SpamTraining",
				delayAnimation: "0",
			},
			{
				img: "study",
				title: "SpamStudy",
				meta: "Research",
				portfolioLink: "https://github.com/AnmolS1/SpamStudy",
				delayAnimation: "100",
			}
		]
	},
	{
		porftoliItems: [
			{
				img: "notion",
				title: "NotionExt",
				meta: "Projects",
				portfolioLink: "https://github.com/AnmolS1/NotionExt",
				delayAnimation: "200",
			},
			{
				img: "college",
				title: "PreReq",
				meta: "Projects",
				portfolioLink: "https://github.com/AnmolS1/PreReq",
				delayAnimation: "0",
			}
		]
	},
	{
		porftoliItems: [
			{
				img: "audio",
				title: "AudioVisualizer",
				meta: "Cool Stuff",
				portfolioLink: "https://github.com/AnmolS1/audio_visualizer",
				delayAnimation: "100",
			},
			{
				img: "parking",
				title: "ParkingSystem",
				meta: "Cool Stuff",
				portfolioLink: "https://github.com/AnmolS1/ParkingSystem",
				delayAnimation: "200",
			}
		]
	}
];

const Portfolio = () => {
	return (
		<div className="tm_section" id="portfolio">
			<SimpleReactLightbox>
				<div className="tm_portfolio">
					<div className="container">
						<div className="positon-relative">
							<div className="tm_title">
								<div className="title_flex">
									<div className="left">
										<span>Portfolio</span>
									</div>
								</div>
							</div>
							{/* End tm_title */}
							
							<div className="portfolio_filter">
								<Tabs>
									<TabList>
										{tabList.map((val, i) => (
											<Tab key={i}>{val}</Tab>
										))}
									</TabList>
									{/* End tablist */}
									
									<div className="portfolio_list has-effect">
										<SRLWrapper>
											{tabListContent.map((tabContent, i) => (
												<TabPanel key={i}>
													<ul className="gallery_zoom">
														{tabContent.porftoliItems.map((item, i) => (
															<li key={i} data-aos="fade-right" data-aos-duration="1200" data-aos-delay={item.delayAnimation} >
																<div className="inner">
																	<div className="entry tm_portfolio_animation_wrap">
																		<a href={`/img/portfolio/${item.img}.jpg`}>
																			<img src={`/img/portfolio/${item.img}.jpg`} alt={item.meta} />
																		</a>
																	</div>
																	<div className="mobile_title">
																		<h3>
																			<a href={item.portfolioLink} rel="noopener noreferrer" target="_blank" >
																				{item.title}
																			</a>
																		</h3>
																		<span>{item.meta}</span>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</TabPanel>
											))}
										</SRLWrapper>
										{/* End tabpanel */}
									</div>
									{/* End list wrapper */}
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</SimpleReactLightbox>
		</div>
	);
};

export default Portfolio;