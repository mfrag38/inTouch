import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	itemContainer: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemLeadingContainer: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 8,
		marginRight: 16,
		borderRadius: 40,
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
