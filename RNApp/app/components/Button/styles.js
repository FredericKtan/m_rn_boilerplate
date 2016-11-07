import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

export default StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: colors.darkBlue,
		margin: 5
	},
	buttonText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "500"
	}
});