import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 32,
	},
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'flex-start',
		marginVertical: 16,
	},
	titlePadding: {
		flex: 0.75,
	},
	titleText: {
		fontSize: 35,
		flexWrap: 'wrap',
		color: Colors.PrimaryColor,
	},
	bodyContainer: {
		flex: 2.5,
		width: '100%',
		justifyContent: 'flex-start',
	},
});
