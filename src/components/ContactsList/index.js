import React, { useCallback, useEffect } from 'react';
import { SectionList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactsListItem from '../ContactsListItem';
import ContactsListSectionHeader from '../ContactsListSectionHeader';
import ContactsListItemSeparator from '../ContactsListItemSeparator';
import RoundedButton from '../RoundedButton';
import { styles } from './style';
import Colors from '../../constants/Colors';

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
			/* contentContainerStyle={[
				contentContainerStyle,
				contacts.length ? null : { justifyContent: 'center' },
			]} */
			contentContainerStyle={contentContainerStyle}
			scrollTo
			maxToRenderPerBatch={5}
			windowSize={5}
			ListEmptyComponent={ListEmptyComponent}
		/>
	);
};

export default ContactsList;
