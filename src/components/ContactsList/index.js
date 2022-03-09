import React, { useCallback } from 'react';
import { SectionList } from 'react-native';
import ContactsListItem from '../ContactsListItem';
import ContactsListSectionHeader from '../ContactsListSectionHeader';
import ContactsListItemSeparator from '../ContactsListItemSeparator';
import { styles } from './style';

const ContactsList = (props) => {
	const { contacts } = props;

	const keyExtractor = useCallback((item, index) => item + index);

	const renderItem = useCallback(({ item }) => (
		<ContactsListItem item={item} />
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
			sections={contacts}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			stickySectionHeadersEnabled={true}
			renderSectionHeader={renderSectionHeader}
			ItemSeparatorComponent={ItemSeparatorComponent}
			contentContainerStyle={contentContainerStyle}
			maxToRenderPerBatch={5}
			windowSize={5}
		/>
	);
};

export default ContactsList;
