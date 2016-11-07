import React from "react";
import {
	TextInput,
	View
} from "react-native";

import styles from "./styles";

export default class Input extends React.Component {
	render() {
		return (
			<View>
				{ this.props.borderTop ? <View style={ styles.divider } /> : null }
				<TextInput
					style={ styles.input }
					autoCapitalize="none"
					autoCorrect={ false }
					{ ...this.props }
				/>
			</View>
		);
	}
}

Input.propTypes = {
	borderTop: React.PropTypes.bool
};