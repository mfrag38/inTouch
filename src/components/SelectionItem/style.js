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
		backgroundColor: Colors.PrimaryColor,
	},
	avatarText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.White,
	},
	deselectButton: {
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
	deselectButtonContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
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
