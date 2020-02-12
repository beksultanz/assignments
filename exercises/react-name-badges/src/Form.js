import React from "react";
import BadgeInfo from "./BadgeInfo";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			placeOfBirth: "",
			phone: "",
			favFood: "",
			info: "",
			badges: []
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		let { firstName, lastName, placeOfBirth, phone, email, info } = this.state;
		const newBadges = {
			firstName,
			lastName,
			phone,
			email,
			info,
			placeOfBirth
		};

		this.setState(prevState => {
			return { 
				badges: [...prevState.badges, newBadges],
				firstName: "",
				lastName: "",
				email: "",
				placeOfBirth: "",
				phone: "",
				favFood: "",
				info: ""
			};
		});
	};

	render() {
		return (
            <div className="container">
            <header>Please fill out this form </header>
				<form className="form">
					<input
						type="text"
						name="firstName"
						value={this.state.firstName}
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="lastName"
						value={this.state.lastName}
						placeholder="Last Name"
						onChange={this.handleChange}
					/>
					<input
						type="number"
						name="phone"
						value={this.state.phone}
						placeholder="Phone Number"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="email"
						value={this.state.email}
						placeholder="Email"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="placeOfBirth"
						value={this.state.placeOfBirth}
						placeholder="Place of Birth"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="favFood"
						value={this.state.favFood}
						placeholder="Favourite Food"
						onChange={this.handleChange}
					/>
					<textarea
						type="text"
						name="info"
						value={this.state.info}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
				<BadgeInfo badges={this.state.badges} />
			</div>
		);
	}
}

export default Form;
