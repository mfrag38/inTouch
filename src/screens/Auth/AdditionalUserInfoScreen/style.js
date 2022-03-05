import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.BackgroundColor,
	},
	headerContainer: {
		width: '100%',
		height: 56,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 3,
		backgroundColor: Colors.HeaderBackgroundColor,
	},
	headerTitleContainer: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.White,
	},
	bodyContainer: {
		width: '100%',
		flex: 1,
		paddingHorizontal: 16,
	},
	inputFormContainer: {
		flex: 1.5,
	},
	formContainerStyle: {
		flex: 1,
	},
	formTextFieldStyle: {
		flex: 1,
		justifyContent: 'center',
	},
	spacer: {
		flex: 1.5,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	bottomSpacer: {
		flex: 1,
	},
});
