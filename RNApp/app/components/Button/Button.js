import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Button extends React.Component {
	render() {
		return (
			<TouchableOpacity style={ styles.button } onPress={ this.props.onPress }>
				<Text style={ styles.buttonText }>
					{ this.props.text }
				</Text>
			</TouchableOpacity>
		);
	}
}

Button.propTypes = {
	text: React.PropTypes.string,
	onPress: React.PropTypes.func
};

Button.defaultProps = {
	text: "Button",
	onPress: () => console.log("Button pressed")
};