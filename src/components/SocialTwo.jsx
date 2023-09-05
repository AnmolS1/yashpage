import React from "react";

const SocialShare = [
	{
		iconName: "github",
		link: "https://github.com/AnmolS1",
	},
	{
		iconName: "hackerrank",
		link: "https://www.hackerrank.com/discoinferno_"
	},
	{
		iconName: "facebook",
		link: "https://www.facebook.com/profile.php?id=100055590279838"
	},
	{
		iconName: "instagram",
		link: "https://www.instagram.com/anmols_1"
	}
];

const Social = () => {
	return (
		<>
		<ul className="social social-default position-relative">
			{SocialShare.map((val, i) => (
				<li key={i}>
					<a href={`${val.link}`} target="_blank" rel="noreferrer">
						<img className="svg" src={`/img/svg/social/${val.iconName}.svg`} alt="social"></img>
					</a>
				</li>
			))}
		</ul>
		{/* END social */}
		</>
	);
};

export default Social;