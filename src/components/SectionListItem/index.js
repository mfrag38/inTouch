import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { styles } from './style';

const SectionListItem = (props) => {
	const { item } = props;

	const {
		itemContainer,
		itemLeadingContainer,
		itemLeadingText,
		itemTitlesContainer,
		itemTitleText,
		itemSubTitleText,
		itemTailContainer,
	} = styles;

	return (
		<View style={itemContainer}>
			<View style={itemLeadingContainer}>
				<Text style={itemLeadingText}>{item.contactIcon}</Text>
			</View>
			<View style={itemTitlesContainer}>
				<Text style={itemTitleText}>{item.contactName}</Text>
				<Text style={itemSubTitleText} numberOfLines={1}>
					{item.contactStatus}
				</Text>
			</View>
			<View style={itemTailContainer}>
				<Icon
					name={
						item.contactSelected ? 'check-circle' : 'circle-outline'
					}
					size={24}
					color={Colors.SecondaryColor}
				/>
			</View>
		</View>
	);
};

export default SectionListItem;
