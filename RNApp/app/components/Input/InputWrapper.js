import React from "react";
import { View } from "react-native";
import styles from "./styles";

export default class InputWrapper extends React.Component {
	render() {
		return (
			<View style={ styles.inputWrapper }>
				{ this.props.children }
			</View>
		);
	}
}

InputWrapper.propTypes = {
	children: React.PropTypes.array
};