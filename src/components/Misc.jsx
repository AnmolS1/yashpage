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
						<h3>What I'm Reading / Working On</h3>
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
											<a href="https://doi.org/10.1002/adma.202200512">3D Printing of 'Organic Electronics'</a>
										</h3>
										<p className="date">
											By Omid Dadras-Toussi, et al.{" "}<span>16 June 2022</span>
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
															<a href="https://doi.org/10.1002/adma.202200512">3D Printing of 'Organic Electronics'</a>
														</h3>
														<p className="date">
															Omid Dadras-Toussi, et al.{" "}<span>16 June 2022</span>
														</p>
													</div>
													{/* End details */}
													
													<div className="description">
														<p>
															In this paper it is demonstrated that organic semiconductors
															could be used in conjunction with 3D printing material in order
															to produce an organic structure that conducts electricity 10
															times better than without the semiconductors.
														</p>
														<blockquote>
															We anticipate that the presented MPL-compatible OS
															composite resins will pave the path toward production
															of soft, bioactive, and conductive microstructures
															for various applications in the emerging fields of
															flexible bioelectronics/biosensors, nanoelectronics,
															organ-on-chips, and immune cell therapies.
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
											<a href="https://github.com/AnmolS1/SpamTraining">Training Machine Learning Models On Spam Emails</a>
										</h3>
										<p className="date">
											By Anmol Saxena
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
															<a href="https://github.com/AnmolS1/SpamTraining">Training Machine Learning Models On Spam Emails</a>
														</h3>
														<p className="date">
															By Anmol Saxena
														</p>
													</div>
													{/* END DETAILS */}
													
													<div className="description">
														<p>
															For this project, I am attempting to train multiple machine
															learning models on a set of spam and non-spam emails with the
															purpose of identifying whether any given email, normalized to
															a series of data, is spam or not.
														</p>
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