import { StyleSheet, StatusBar } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		height: StatusBar.currentHeight * 2.1,
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	itemLeadingContainer: {
		width: 42,
		height: 42,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 42,
		overflow: 'hidden',
		backgroundColor: Colors.DarkCyan,
	},
	itemLeadingText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.White,
	},
	itemTitlesContainer: {
		flex: 1,
		height: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'flex-start',
		marginHorizontal: 8,
	},
	itemTitleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.White,
	},
	itemSubTitleText: {
		color: Colors.Gray,
	},
	itemTailContainer: {
		width: 36,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 36,
		overflow: 'hidden',
	},
});
