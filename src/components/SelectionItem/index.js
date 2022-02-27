import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const SelectionItem = (props) => {
	const { item } = props;

	const {
		container,
		avatarContainer,
		avatarText,
		spacer,
		titleContainer,
		titleText,
	} = styles;

	return (
		<View style={container}>
			<View style={avatarContainer}>
				<Text style={avatarText}>{item.contactIcon}</Text>
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
