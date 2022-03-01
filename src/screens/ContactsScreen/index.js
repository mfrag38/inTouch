import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsList from '../../components/ContactsList';
import SelectionList from '../../components/SelectionList';
import Colors from '../../constants/Colors';
import { groupArrayBy } from '../../utils/arrayOperations';
import Contacts from './Contacts';
import { styles } from './style';

const selectedContacts = [
	{
		contactName: 'Adeline Dudley',
		contactStatus: 'minim est aliquip veniam proident qui',
		contactIcon: 'A',
		contactSelected: true,
	},
	{
		contactName: 'Bertie Edwards',
		contactStatus: 'quis labore excepteur nulla aute nulla',
		contactIcon: 'B',
		contactSelected: true,
	},
	{
		contactName: 'Cannon Harrell',
		contactStatus: 'minim est adipisicing nulla et laborum',
		contactIcon: 'C',
		contactSelected: true,
	},
	{
		contactName: 'Danielle Oneal',
		contactStatus: 'dolor laboris adipisicing minim minim cillum',
		contactIcon: 'D',
		contactSelected: true,
	},
	{
		contactName: 'Adeline Dudley',
		contactStatus: 'minim est aliquip veniam proident qui',
		contactIcon: 'A',
		contactSelected: true,
	},
	{
		contactName: 'Bertie Edwards',
		contactStatus: 'quis labore excepteur nulla aute nulla',
		contactIcon: 'B',
		contactSelected: true,
	},
	{
		contactName: 'Cannon Harrell',
		contactStatus: 'minim est adipisicing nulla et laborum',
		contactIcon: 'C',
		contactSelected: true,
	},
	{
		contactName: 'Danielle Oneal',
		contactStatus: 'dolor laboris adipisicing minim minim cillum',
		contactIcon: 'D',
		contactSelected: true,
	},
];

const ContactsScreen = (props) => {
	/* const dataGetter = () => {
		var returnData = [];
		const ff = groupArrayBy(Contacts, 'contactIcon');
		// console.log('FF:', ff);
		// console.log(pets.some((pet) => pet.name.includes('cat')));
		// console.log(
		// 	Contacts.filter((contact) => contact.contactIcon.includes('A')),
		// );
		// console.log(
		// 	Contacts.includes((contact) => contact.contactIcon.includes('D')),
		// );
		// console.log('The FF:', ff);
		return ff;
	}; */

	const {
		container,
		headerContainer,
		headerTopContainer,
		headerButtonText,
		headerTitlesContainer,
		headerTitleText,
		headerSubTitleText,
		headerBottomContainer,
		headerBottomIconContainer,
		headerInputSearchFieldContainer,
		selectionAreaContainer,
		bodyContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={headerContainer}>
				<View style={headerTopContainer}>
					<View />
					<View style={headerTitlesContainer}>
						<Text style={headerTitleText}>Contacts</Text>
						<Text style={headerSubTitleText}>
							0 / {Contacts.length}
						</Text>
					</View>
					<View>
						<Icon
							name='account-star'
							size={30}
							color={Colors.SecondaryColor}
						/>
					</View>
				</View>
				<View style={headerBottomContainer}>
					<View style={headerBottomIconContainer}>
						<Icon name='magnify' size={24} color={Colors.Grey} />
					</View>
					<View style={headerInputSearchFieldContainer}>
						<TextInput
							numberOfLines={1}
							placeholder='Search'
							placeholderTextColor={Colors.Grey}
						/>
					</View>
				</View>
			</View>
			{selectedContacts.length !== 0 ? (
				<View style={selectionAreaContainer}>
					<SelectionList selectedContacts={selectedContacts} />
				</View>
			) : null}
			<View style={bodyContainer}>
				<ContactsList
					contacts={groupArrayBy(Contacts, 'contactIcon')}
				/>
			</View>
		</View>
	);
};

export default ContactsScreen;
