import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const window = Dimensions.get("window");

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.orange
	},
	header: {
		marginBottom: 25,
		alignItems: "center"
	},
	headerText: {
		fontSize: 30,
		color: colors.white
	},
	error: {
		height: 28,
		justifyContent: "center",
		width: window.width,
		alignItems: "center"
	},
	errorText: {
		color: colors.lesserWhite,
		fontSize: 14
	},
	buttons: {
		flexDirection: "row"
	},
	logo: {

	}
});