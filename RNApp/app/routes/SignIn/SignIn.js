import React from "react";
import KeyboardSpacer from "react-native-keyboard-spacer";
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from "react-native";

import styles from "./styles";
import images from "../../config/images";

import Button from "../../components/Button";
import Input, { InputWrapper } from "../../components/Input";

export default class SignIn extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.header }>
					<Image
						style={ styles.logo }
						source={ images.logo }
					/>
					<Text style={ styles.headerText }>Cooking Ap'</Text>
				</View>
				<InputWrapper>
					<Input placeholder="Email address" />
					<Input placeholder="Password" secureTextEntry borderTop />
					{ this.props.confirmPasswordVisible  ?
						<Input
							placeholder="Confirm password"
							onChangeText={ (confirmPassword) => this.props.updateState({ confirmPassword }) }
							secureTextEntry
							borderTop
						/> : null
					}
				</InputWrapper>
				<View style={ styles.error }>
					<Text style={ styles.errorText }> { this.props.error }</Text>
				</View>
				<View style={ styles.buttons }>
					<Button text="Sign In" onPress={ this.props.createAccount } />
					<Button text="Create Account" onPress={ this.props.createAccount } />
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