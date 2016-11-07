import React from "react";
import {
	ActivityIndicator,
	Text,
	View
} from "react-native";

import { colors } from "../../config/styles";
import styles from "./styles";

export default class Loading extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<ActivityIndicator
					animating
					size={ this.props.size }
					color={ colors.lightBlack }
					{ ...this.props }
				/>
				<Text style={ styles.message }>
					Loading
				</Text>
			</View>
		);
	}
}

Loading.propTypes = {
	size: React.PropTypes.string
};

Loading.defaultProps = {
	size: "large"
};