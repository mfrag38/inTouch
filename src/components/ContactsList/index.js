import React, { useCallback } from 'react';
import { SectionList } from 'react-native';
import ContactsListItem from '../ContactsListItem';
import ContactsListSectionHeader from '../ContactsListSectionHeader';
import ContactsListItemSeparator from '../ContactsListItemSeparator';
import { styles } from './style';

const ContactsList = (props) => {
	const {
		contacts,
		isContactsMultiSelect,
		selectedContacts,
		onItemPress,
		onItemLongPress,
		ListEmptyComponent,
		listRef,
	} = props;

	const keyExtractor = useCallback((item, index) => item + index);

	const renderItem = useCallback(({ item, index }) => (
		<ContactsListItem
			item={item}
			onItemPress={() => onItemPress(item)}
			onItemLongPress={() => onItemLongPress(item)}
			selectionEnabled={isContactsMultiSelect}
			isItemSelected={selectedContacts.includes(item)}
		/>
	));

	const renderSectionHeader = useCallback(({ section: { title } }) => (
		<ContactsListSectionHeader title={title} />
	));

	const ItemSeparatorComponent = useCallback(() => (
		<ContactsListItemSeparator />
	));

	const { contentContainerStyle } = styles;

	return (
		<SectionList
			ref={listRef}
			sections={contacts}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			stickySectionHeadersEnabled={true}
			renderSectionHeader={renderSectionHeader}
			ItemSeparatorComponent={ItemSeparatorComponent}
			contentContainerStyle={contentContainerStyle}
			scrollTo
			maxToRenderPerBatch={5}
			windowSize={5}
			ListEmptyComponent={ListEmptyComponent}
		/>
	);
};

export default ContactsList;
