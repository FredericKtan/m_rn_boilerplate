import React from "react";
import SignIn from "./SignIn";
import { LayoutAnimation } from "react-native";
import Meteor from "react-native-meteor";

export default class SignInContainer extends React.Component {
	constructor(props) {
		super(props);

		this.mounted = false;
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			confirmPasswordVisisble: false,
			error: null
		};
	}

	componentWillMount() {
		this.mounted = true;
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	handleError(error) {
		if (this.mounted) {
			this.setState({ error });
		}
	}

	validInput(overrideConfirm) {
		let valid = true;

		if (this.state.email.length === 0 || this.password.length === 0) {
			this.handleError("Email and password cannot be empty !");
			valid = false;
		}
		if (valid) {
			this.handleError(null);
		}

		return valid;
	}

	handleSignIn() {
		if (this.validInput(true)) {
			Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
				if (err) {
					this.handleError(err.reason);
				} else {
					this.handleSignIn();
				}
			});
		} else {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
			this.setState({ confirmPasswordVisible: true });
		}
	}

	handleCreateAccount() {
		const { email, password, confirmPasswordVisible } = this.state;

		if (confirmPasswordVisible && this.validInput()) {
			Accounts.createUser({ email, password }, (err) => {
				if (err) {
					this.handleError(err.reason);
				} else {
					this.handleSignIn();
				}
			});
		} else {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
			this.setState({ confirmPasswordVisible: true });
		}
	}

	render() {
		return (
			<SignIn 
				updateState={ this.setState.bind(this) }
				signIn={ this.handleSignIn.bind(this) }
				createAccount={ this.handleCreateAccount.bind(this) }
				{ ...this.state }
			/>
		);
	}
}