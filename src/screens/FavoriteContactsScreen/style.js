import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

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
	backButtonContainer: {
		width: 56,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
	},
	backButton: {
		width: 48,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 56,
		overflow: 'hidden',
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
	},
});
