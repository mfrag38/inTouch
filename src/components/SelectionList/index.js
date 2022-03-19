import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import SelectionItem from '../SelectionItem';
import { styles } from './style';

const SelectionList = (props) => {
	const { selectedContacts, onDeselectionPress } = props;

	const keyExtractor = useCallback((item, index) => item + index);

	const renderItem = useCallback(({ item }) => (
		<SelectionItem
			item={item}
			onDeselectionPress={() => onDeselectionPress(item)}
		/>
	));

	const { contentContainerStyle } = styles;

	return (
		<FlatList
			data={selectedContacts}
			keyExtractor={keyExtractor}
			horizontal={true}
			renderItem={renderItem}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={contentContainerStyle}
		/>
	);
};

export default SelectionList;
