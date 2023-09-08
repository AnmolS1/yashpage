import React from "react";

const SocialShare = [
	{
		iconName: "facebook",
		link: "https://www.facebook.com/yashvi.shah.503092"
	},
	{
		iconName: "instagram",
		link: "https://www.instagram.com/theyashvishah"
	},
	{
		iconName: "linkedin",
		link: "https://www.linkedin.com/in/yshah-yashvishah/"
	}
];

const Social = () => {
	return (
		<div className="share">
			<span>Share:</span>
			<ul className="social">
				{SocialShare.map((val, i) => (
					<li key={i}>
						<a href={`${val.link}`} target="_blank" rel="noreferrer">
							<img className="svg" src={`/img/svg/social/${val.iconName}.svg`} alt="social"></img>
						</a>
					</li>
				))}
			</ul>
			{/* END social */}
		</div>
	);
};

export default Social;