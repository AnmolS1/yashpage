import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Misc = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	
	function toggleModalOne() {
		setIsOpen(!isOpen);
	}
	function toggleModalTwo() {
		setIsOpen2(!isOpen2);
	}
	function toggleModalThree() {
		setIsOpen3(!isOpen3);
	}
	
	return (
		<div className="tm_section" id="misc">
			<div className="tm_news">
				<div className="container">
					<div className="tm_title">
						<span>misc</span>
						<h3>What I'm Reading</h3>
					</div>
					{/* End tm_title */}
					
					<div className="news_list">
						<ul>
							<li data-aos="fade-right" data-aos-duration="1200">
								<div className="list_inner">
									<div className="image" onClick={toggleModalOne}>
										<img src="/img/placeholders/4-3.jpg" alt="thumb" />
										<div
											className="main"
											style={{
												backgroundImage: `url(${
													process.env.PUBLIC_URL + "/img/misc/1.jpg"
												})`,
											}}
										></div>
									</div>
									{/* End image */}
									
									<div className="details">
										<h3 className="title">
											<a href="https://dl.acm.org/doi/pdf/10.1145/3411764.3445306">Whither AutoML? Understanding the Role of Automation in Machine Learning Workflows</a>
										</h3>
										<p className="date">
											By Doris Xin, et al.{" "}<span>07 May 2021</span>
										</p>
									</div>
									{/* End details */}
									
									{/* START MODAL */}
									<Modal isOpen={isOpen} onRequestClose={toggleModalOne} contentLabel="My dialog" className="custom-modal" overlayClassName="custom-overlay" closeTimeoutMS={500}>
										<div className="tm_modalbox_news">
											<button className="close-modal" onClick={toggleModalOne}>
												<img src="/img/svg/cancel.svg" alt="close icon" />
											</button>
											{/* End close icon */}
											<div className="box_inner">
												<div className="description_wrap scrollable">
													<div className="image">
														<img src="/img/placeholders/4-3.jpg" alt="thumb" />
														<div
															className="main"
															style={{
																backgroundImage: `url(${
																	process.env.PUBLIC_URL + "/img/misc/1.jpg"
																})`,
															}}
														></div>
													</div>
													{/* End image */}
													
													<div className="details">
														<h3 className="title">
															<a href="https://dl.acm.org/doi/pdf/10.1145/3411764.3445306">Whither AutoML? Understanding the Role of Automation in Machine Learning Workflows</a>
														</h3>
														<p className="date">
															Doris Xin, et al.{" "}<span>07 May 2021</span>
														</p>
													</div>
													{/* End details */}
													
													<div className="description">
														<p>
															The article discusses the role of automation in machine
															learning (ML) workflows. It argues that while AutoML
															tools have the potential to make ML more accessible to
															non-experts, they also have some limitations. For example,
															AutoML tools can be biased, and they may not be able to
															produce the best possible models for a given task. The
															article concludes by arguing that the future of AutoML
															lies in a partnership between humans and machines. Humans
															can provide domain expertise and insights that AutoML
															tools cannot, while AutoML tools can automate the tedium
															of ML workflows.
														</p>
														<blockquote>
															Instead of full automation being the ultimate goal of AutoML,
															designers of these tools should focus on supporting a
															partnership between the user and the AutoML tool.
														</blockquote>
													</div>
													{/* End description */}
												</div>
											</div>
											{/* End box inner */}
										</div>
										{/* End modal box news */}
									</Modal>
									{/* End modal */}
								</div>
							</li>
							{/* End single blog */}

							<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
								<div className="list_inner">
									<div className="image" onClick={toggleModalTwo}>
										<img src="/img/placeholders/4-3.jpg" alt="thumb" />
										<div
											className="main"
											style={{
												backgroundImage: `url(${
													process.env.PUBLIC_URL + "/img/misc/2.jpg"
												})`,
											}}
										></div>
									</div>
									{/* End image */}
									
									<div className="details">
										<h3 className="title" onClick={toggleModalTwo}>
											<a href="https://doi.org/10.3390/ijerph19106340">Virtual Training Can Reduce Psychosocial Stress & Anxiety</a>
										</h3>
										<p className="date">
											By Dalila Burin, et al.{" "} <span>23 May 2022</span>
										</p>
									</div>
									{/* End details */}
									
									{/* START MODAL */}
									<Modal isOpen={isOpen2} onRequestClose={toggleModalTwo} contentLabel="My dialog" className="custom-modal" overlayClassName="custom-overlay" closeTimeoutMS={500}>
										<div className="tm_modalbox_news">
											<button className="close-modal" onClick={toggleModalTwo}>
												<img src="/img/svg/cancel.svg" alt="close icon" />
											</button>
											{/* End close icon */}
											<div className="box_inner">
												<div className="description_wrap scrollable">
													<div className="image">
														<img src="/img/placeholders/4-3.jpg" alt="thumb" />
														<div
															className="main"
															style={{
																backgroundImage: `url(${
																	process.env.PUBLIC_URL + "/img/misc/2.jpg"
																})`,
															}}
														></div>
													</div>
													{/* End image */}
													
													<div className="details">
														<h3 className="title">
															<a href="https://doi.org/10.3390/ijerph19106340">Virtual Training Can Reduce Psychosocial Stress & Anxiety</a>
														</h3>
														<p className="date">
															By Dalila Burin, et al.{" "}<span>23 May 2022</span>
														</p>
													</div>
													{/* End details */}
													
													<div className="description">
														<p>
															As it turns out, using virtual reality can help to reduce
															the psychosocial anxiety and stress that comes with the
															assumed necessity of doing such training in person. This
															article and study explores the ways in which virtual reality
															can help the general populace in decreasing unnecessary
															anxiety.
														</p>
														<blockquote>
															IVR training can also promote positive acute benefits
															at the neuroendocrine level (measured by sAA) and for
															subjective anxiety (measured by the STAI-S), thereby
															modulating the psychosocial stress response. Once again,
															we confirmed the strength of the virtual illusion of
															ownership and agency over the avatar, even under conditions
															of visuo-motor asynchrony and motor intention discrepancy.
														</blockquote>
													</div>
													{/* End description */}
												</div>
											</div>
											{/* End box inner */}
										</div>
										{/* End modal box news */}
									</Modal>
									{/* End modal */}
								</div>
							</li>
							{/* End single blog */}
							
							<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
								<div className="list_inner">
									<div className="image" onClick={toggleModalThree}>
										<img src="/img/placeholders/4-3.jpg" alt="thumb" />
										<div
											className="main"
											style={{
												backgroundImage: `url(${
													process.env.PUBLIC_URL + "/img/misc/3.jpg"
												})`,
											}}
										></div>
									</div>
									{/* END IMAGE */}
									
									<div className="details">
										<h3 className="title" onClick={toggleModalThree}>
											<a href="https://www.sciencedirect.com/science/article/pii/S2667096822000891">Deep learning in business analytics: A clash of expectations and reality</a>
										</h3>
										<p className="date">
											Marc Schmitt{" "}<span>08 Dec 2022</span>
										</p>
									</div>
									{/* END DETAILS */}
									
									{/* START MODAL */}
									<Modal isOpen={isOpen3} onRequestClose={toggleModalThree} contentLabel="My dialog" className="custom-modal" overlayClassName="custom-overlay" closeTimeoutMS={500}>
										<div className="tm_modalbox_news">
											<button className="close-modal" onClick={toggleModalThree}>
												<img src="/img/svg/cancel.svg" alt="close icon" />
											</button>
											{/* END CLOSE MODAL */}
											
											<div className="box_inner">
												<div className="description_wrap scrollable">
													<div className="image">
														<img src="/img/placeholders/4-3.jpg" alt="thumb" />
														<div
															className="main"
															style={{
																backgroundImage: `url(${
																	process.env.PUBLIC_URL + "/img/misc/3.jpg"
																})`,
															}}
														></div>
													</div>
													{/* END IMAGE */}
													
													<div className="details">
														<h3 className="title">
														<a href="https://www.sciencedirect.com/science/article/pii/S2667096822000891">Deep learning in business analytics: A clash of expectations and reality</a>
														</h3>
														<p className="date">
															Marc Schmitt{" "}<span>08 Dec 2022</span>
														</p>
													</div>
													{/* END DETAILS */}
													
													<div className="description">
														<p>
															The article argues that there are several factors that
															have hindered the adoption of deep learning in business
															analytics: computational complexity, lack of big data
															architecture, lack of transparency, skill shortage, and
															leadership commitment. It also argues that deep learning
															does not always outperform traditional machine learning
															models in the case of structured datasets with fixed-length
															feature vectors. This is because deep learning models
															are often more complex and require more data to train
															than traditional machine learning models.
														</p>
														<blockquote>
															The hype around deep learning in business analytics has
															been high, but the reality is that its adoption has been
															slow. There are a number of challenges that need to be
															addressed before deep learning can be widely adopted,
															but the potential benefits are significant.
														</blockquote>
													</div>
													{/* END DESCRIPTION */}
												</div>
											</div>
										</div>
									</Modal>
								</div>
								{/* END LIST INNER */}
							</li>
							{/* End single blog */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Misc;