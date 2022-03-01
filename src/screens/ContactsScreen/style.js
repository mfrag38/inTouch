import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
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
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerButtonText: {
		fontSize: 18,
		color: Colors.SecondaryColor,
	},
	headerTitlesContainer: {
		height: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	headerTitleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.White,
	},
	headerSubTitleText: {
		color: Colors.White,
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
	headerBottomIconContainer: {
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerInputSearchFieldContainer: {
		flex: 1,
	},
	selectionAreaContainer: {
		width: '100%',
	},
	bodyContainer: {
		width: '100%',
	},
});
