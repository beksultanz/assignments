import React from "react";
// import InfoCallout from "./InfoCallout"
// import ImageCallout from "./ImageCallout"
// import EmailCallout from "./EmailCallout"
import Callout from "./Callout";

const App = () => {
	return (
		<main>
			<h1>Welcome!</h1>
			<Callout>
				<h2>Don't missout!</h2>
				<p>
					Unless you don't suffer from FOMO, you better make sure you fill out
					the email form below!
				</p>
			</Callout>
			<p>
				This is propbably the best site you've ever come across. I'm glad you're
				here to wtiness the magnificence of this website right now.
			</p>

			<Callout>
				<img
					src="https://picsum.photos/id/102/4320/3240"
					width="600px"
					alt=""
				/>
				<figcaption>"Just look at those sparkling respberries!"</figcaption>
			</Callout>
			<p>
				Here's some more unforgettable content. Lopsem ipsum something or other
			</p>

			<Callout>
				<h2>Give us your email. We definitely won't sell it to anyone.</h2>
				<input type="email" placeholder="Enter Email" />
				<button>Sign me up</button>
			</Callout>
		</main>
	);
};

export default App;
