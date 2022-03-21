import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	separatorThreeAndHalf: { flex: 3.5 },
	textContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	textStyle: {
		flex: 1,
		flexWrap: 'wrap',
		fontSize: 26,
		color: Colors.White,
		textAlign: 'center',
	},
	separatorTwoAndHalf: {
		flex: 2.5,
	},
	buttonContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
	},
	separatorOne: { flex: 1 },
});
