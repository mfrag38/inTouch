import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { styles } from './style';

const ContactsListItem = (props) => {
	const {
		item,
		onItemPress,
		onItemLongPress,
		selectionEnabled,
		isItemSelected,
	} = props;

	const {
		itemContainer,
		itemLeadingContainer,
		itemLeadingText,
		itemTitlesContainer,
		itemTitleText,
		itemTailContainer,
	} = styles;

	return (
		<TouchableNativeFeedback
			onPress={onItemPress}
			onLongPress={onItemLongPress}
			delayLongPress={1000}
		>
			<View style={itemContainer}>
				<View style={itemLeadingContainer}>
					<Text style={itemLeadingText}>{item.displayName[0]}</Text>
				</View>
				<View style={itemTitlesContainer}>
					<Text style={itemTitleText}>{item.displayName}</Text>
				</View>
				{selectionEnabled === true ? (
					<View style={itemTailContainer}>
						<Icon
							name={
								isItemSelected
									? 'check-circle'
									: 'circle-outline'
							}
							size={24}
							color={
								isItemSelected
									? Colors.SecondaryColor
									: Colors.Gray
							}
						/>
					</View>
				) : null}
			</View>
		</TouchableNativeFeedback>
	);
};

export default ContactsListItem;
