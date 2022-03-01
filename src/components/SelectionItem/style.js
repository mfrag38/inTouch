import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		width: 96,
		paddingHorizontal: 8,
		alignItems: 'center',
	},
	avatarContainer: {
		width: 56,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 56,
		backgroundColor: Colors.DodgerBlue,
	},
	avatarText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.White,
	},
	deselectButtonContainer: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		right: -5,
		borderRadius: 24,
		overflow: 'hidden',
		backgroundColor: Colors.SoftGray,
	},
	spacer: {
		height: 8,
	},
	titleContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		width: '100%',
		color: Colors.White,
	},
});
