import React from 'react';
import { FlatList } from 'react-native';
import SelectionItem from '../SelectionItem';
import { styles } from './style';

const SelectionList = (props) => {
	const { selectedContacts } = props;

	const { contentContainerStyle } = styles;

	return (
		<FlatList
			data={selectedContacts}
			keyExtractor={(item, index) => item + index}
			horizontal={true}
			renderItem={({ item }) => <SelectionItem item={item} />}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={contentContainerStyle}
		/>
	);
};

export default SelectionList;
