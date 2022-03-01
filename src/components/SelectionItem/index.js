import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { styles } from './style';

const SelectionItem = (props) => {
	const { item } = props;

	const {
		container,
		avatarContainer,
		avatarText,
		deselectButtonContainer,
		spacer,
		titleContainer,
		titleText,
	} = styles;

	return (
		<View style={container}>
			<View style={avatarContainer}>
				<Text style={avatarText}>{item.contactIcon}</Text>
				<View style={deselectButtonContainer}>
					<Icon name='close' size={18} color={Colors.White} />
				</View>
			</View>
			<View style={spacer} />
			<View style={titleContainer}>
				<Text numberOfLines={1} style={titleText}>
					{item.contactName}
				</Text>
			</View>
		</View>
	);
};

export default SelectionItem;
