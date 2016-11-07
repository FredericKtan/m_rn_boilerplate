import React from "react";
import KeyboardSpacer from "react-native-keyboard-spacer";
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from "react-native";

import styles from "./styles";

import Button from "../../components/Button";
import Input, { InputWrapper } from "../../components/Input";

export default class SignIn extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<InputWrapper>
					<Input placeholder="Email address" />
					<Input placeholder="Password" secureTextEntry borderTop />
				</InputWrapper>
				<View>
					<Button />
				</View>
				<KeyboardSpacer />
			</View>				
		);
	}
}

SignIn.propTypes = {
	updateState: React.PropTypes.func,
	signIn: React.PropTypes.func,
	createAccount: React.PropTypes.func,
	error: React.PropTypes.string,
	confirmPasswordVisible: React.PropTypes.bool
};