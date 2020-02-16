import React from "react";

const ImageCallout = props => {
	return (
		<div className="callout">
			<img src={props.img} width="600px" alt="" />
			<figcaption>{props.caption}</figcaption>
		</div>
	);
};

export default ImageCallout;
