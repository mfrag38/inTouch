import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { styles } from './style';

const SelectionItem = (props) => {
	const { item, onDeselectionPress } = props;

	const {
		container,
		avatarContainer,
		avatarText,
		deselectButton,
		deselectButtonContainer,
		spacer,
		titleContainer,
		titleText,
	} = styles;

	return (
		<View style={container}>
			<View style={avatarContainer}>
				<Text style={avatarText}>{item.displayName[0]}</Text>
				<TouchableOpacity
					style={deselectButton}
					onPress={onDeselectionPress}
				>
					<View style={deselectButtonContainer}>
						<Icon name='close' size={18} color={Colors.White} />
					</View>
				</TouchableOpacity>
			</View>
			<View style={spacer} />
			<View style={titleContainer}>
				<Text numberOfLines={1} style={titleText}>
					{item.displayName}
				</Text>
			</View>
		</View>
	);
};

export default SelectionItem;
