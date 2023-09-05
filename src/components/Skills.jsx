import React from "react";

const Skills = () => {
	return (
		<>
		<div className="tm_section">
			<div className="tm_skills">
				<div className="container">
					<div className="skills_inner">
						<div className="left" data-aos="fade-right" data-aos-duration="1200">
							<div className="tm_title">
								<h3>I have skills in development and research</h3>
							</div>
							<div className="text">
								<p>
									My skillset is both broad and in-depth. Though what is shown formulates my primary skillset,
									I am well-versed in far more fields as well as within each of these.
								</p>
							</div>
						</div>
						{/* End .left */}
						
						<div className="right" data-aos="fade-right" data-aos-duration="1200">
							<div className="tokyo_progress">
								<div className="progress_inner">
									<span>
										<span className="label">Cognitive Science</span>
										<span className="number">99%</span>
									</span>
									<div className="background">
										<div className="bar">
											<div className="bar_in" style={{ width: 99 + "%" }}></div>
										</div>
									</div>
								</div>
								{/* End .progress_inner */}
								
								<div className="progress_inner">
									<span>
										<span className="label">Machine Learning</span>
										<span className="number">95%</span>
									</span>
									<div className="background">
										<div className="bar">
											<div className="bar_in" style={{ width: 95 + "%" }}></div>
										</div>
									</div>
								</div>
								{/* End .progress_inner */}
								
								<div className="progress_inner">
									<span>
										<span className="label">Research</span>
										<span className="number">80%</span>
									</span>
									<div className="background">
										<div className="bar">
											<div className="bar_in" style={{ width: 80 + "%" }}></div>
										</div>
									</div>
								</div>
								{/* End .progress_inner */}
							</div>
						</div>
						{/* End .right */}
					</div>
				</div>
				{/* End .conainer */}
			</div>
		</div>
		</>
	);
};

export default Skills;