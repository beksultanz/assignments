import React from "react";

const EmailCallout = props => {
	return (
		<div className="callout">
			<h2>{props.header}</h2>
			<input type="email" placeholder="Enter Email" />
			<button>{props.btnText}</button>
		</div>
	);
};

export default EmailCallout;