import React from 'react';
import { SectionList } from 'react-native';
import ContactsListItem from '../ContactsListItem';
import ContactsListSectionHeader from '../ContactsListSectionHeader';
import ContactsListItemSeparator from '../ContactsListItemSeparator';
import { styles } from './style';

const ContactsList = (props) => {
	const { contacts } = props;

	const { contentContainerStyle } = styles;

	return (
		<SectionList
			sections={contacts}
			keyExtractor={(item, index) => item + index}
			renderItem={({ item }) => <ContactsListItem item={item} />}
			stickySectionHeadersEnabled={true}
			renderSectionHeader={({ section: { title } }) => (
				<ContactsListSectionHeader title={title} />
			)}
			ItemSeparatorComponent={() => <ContactsListItemSeparator />}
			contentContainerStyle={contentContainerStyle}
		/>
	);
};

export default ContactsList;
