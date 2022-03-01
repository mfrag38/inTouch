import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 32,
		backgroundColor: Colors.BackgroundColor,
	},
	topSpacer: { flex: 0.5 },
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'flex-start',
	},
	titlePadding: {
		flex: 0.5,
	},
	titleText: {
		fontSize: 35,
		flexWrap: 'wrap',
		color: Colors.PrimaryColor,
	},
	bodyContainer: {
		flex: 2.5,
		width: '100%',
		justifyContent: 'center',
	},
	inputFormContainer: {
		flex: 1,
	},
	formContainerStyle: {
		flex: 1,
	},
	formTextFieldStyle: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	bodyFooterContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	bodyFooterText: { color: Colors.White },
});
