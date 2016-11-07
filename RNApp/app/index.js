import React from "react";
import Meteor from "react-native-meteor";

import settings from "./config/settings";

import Loading from "./components/Loading";
import LoggedOut from "./layouts/LoggedOut";

Meteor.connect(settings.METEOR_URL);

class RNApp extends React.Component {
	render() {
		if (this.props.status.connected === false || this.props.loggingIn) {
			return <Loading />;
		} else if (this.props.user !== null) {
			return (
				<View>
					<Text>A user is connected !</Text>
				</View>
			);
		} else {
			return <LoggedOut />;
		}
	}
}

RNApp.propTypes = {
	status: React.PropTypes.object,
	user: React.PropTypes.object,
	loggingIn: React.PropTypes.bool
};

export default Meteor.createContainer(() => {
	return {
		status: Meteor.status(),
		user: Meteor.user(),
		loggingIn: Meteor.loggingIn()
	};
}, RNApp);