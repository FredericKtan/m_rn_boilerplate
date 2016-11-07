import React from "react";
import ExNavigator from "@exponent/react-native-navigator";
import Routes from "../../config/routes";

export default class LoggedOut extends React.Component {
	render() {
		const route = Routes.getSignInRoute();

		return (
			<ExNavigator
				initialRoute={ route }
				style={ { flex: 1 } }
				showNavigationBar={ route.showNavigationBar }
			/>
		);
	};
}