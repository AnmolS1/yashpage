import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
	const [viewport, setViewport] = useState({
		latitude: 32.77666351255151,
		longitude: -96.79698774984574,
		zoom: 9,
	});
	
	return (
		<>
		<div className="map">
			<ReactMapGL
				mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			/>
		</div>
		{/* End map */}
		</>
	);
};

export default Map;