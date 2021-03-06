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
		height: 128,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingHorizontal: 16,
		elevation: 3,
		backgroundColor: Colors.HeaderBackgroundColor,
	},
	headerTopContainer: {
		width: '100%',
		height: 64,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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
	headerActionContainer: {
		width: 56,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 0,
	},
	headerActionButton: {
		width: 48,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 56,
		overflow: 'hidden',
	},
	headerBottomContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 8,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: Colors.SearchBarBackgroundColor,
	},
	headerBottomLeadContainer: {
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerInputSearchFieldContainer: {
		flex: 1,
	},
	headerBottomTailContainer: {
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerBottomTailButton: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bodyContainer: {
		width: '100%',
		flex: 1,
	},
});
