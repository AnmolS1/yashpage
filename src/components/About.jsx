import React from "react";

const About = () => {
	return (
		<>
		<div className="tm_section" id="about">
			<div className="tm_about">
				<div className="container">
					<div className="about_inner">
						<div className="left">
							<div className="image" data-aos="fade-up" data-aos-duration="1200">
								<img src="/img/placeholders/1-1.jpg" alt="placeholder" />
								<div className="main"
									style={{
										backgroundImage: `url(${
											process.env.PUBLIC_URL + "/img/about/1.jpg"
										})`,
									}}
								></div>
							</div>
							{/* End image */}
						</div>
						{/* End left */}
						
						<div className="right">
							<div className="tm_title" data-aos="fade-up" data-aos-duration="1200">
								<span>About Me</span>
								<h3>Creative Multitalented Developer</h3>
							</div>
							<div className="text" data-aos="fade-up" data-aos-duration="1200">
								<p>
									I am a passionate student and an aspiring project/
									product manager with a strong focus on delivering
									innovative solutions that drive business success.
									As an ITSS student at The University of Texas at
									Dallas, most of my time is spent on coursework. These
									courses include Object-Oriented Programming, Database
									Fundamentals, and Information Technology for Business.
									I have gained so much enjoyment from my ITSS courses
									each semester, and I am excited to learn more each
									week.
									<br></br>
									I have worked on various projects to hone my skills in
									data analysis and develop a deeper understanding of
									programming languages such as Java, SQL, and Python. I
									am also pursuing a certification in AWS. I am a quick
									learner and have enjoyed the challenges to my critical
									thinking and problem-solving abilities. As well as the
									challenge of using numbers to tell a story and convey
									an idea. 
									<br></br>
									In addition to my technical skills, I possess
									excellent interpersonal skills that have enabled me to
									work effectively in collaborative environments. I am a
									natural team player who enjoys working with others to
									achieve common goals, approaching every task with a
									positive attitude and a willingness to learn.
								</p>
							</div>
							<div className="tm_button" data-aos="fade-up" data-aos-duration="1200">
								<a href="img/resume/yashvi.pdf" download>Download CV</a>
							</div>
						</div>
						{/* End right */}
					</div>
				</div>
				{/* End container */}
			</div>
		</div>
		</>
	);
};

export default About;