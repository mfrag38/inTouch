import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const SectionListSectionHeader = (props) => {
	const { title } = props;

	const { headerContainer, headerText } = styles;

	return (
		<View style={headerContainer}>
			<Text style={headerText}>{title}</Text>
		</View>
	);
};

export default SectionListSectionHeader;
