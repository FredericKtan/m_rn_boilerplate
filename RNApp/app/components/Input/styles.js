import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../config/styles";

const window = Dimensions.get("window");

export default StyleSheet.create({
	input: {
		height: 40,
		borderRadius: 5,
		backgroundColor: colors.white,
		marginLeft: 10,
		marginRight: 10,
		marginVertical: 5,
		paddingVertical: 5,
		paddingHorizontal: 15
	},
	divider: {
		height: 1,
		backgroundColor: colors.lightBlack,
		flex: 1,
		marginLeft: 10,
		marginRight: 10
	},
	inputWrapper: {
		backgroundColor: colors.white,
		width: window.width
	}
});