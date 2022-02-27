import React from 'react';
import { View, Text, SectionList, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionListItem from '../../components/SectionListItem';
import SectionListItemSeparator from '../../components/SectionListItemSeparator';
import SectionListSectionHeader from '../../components/SectionListSectionHeader';
import SelectionItem from '../../components/SelectionItem';
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
];

const ContactsScreen = (props) => {
	const dataGetter = () => {
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
	};

	const {
		container,
		headerContainer,
		headerTopContainer,
		// headerButtonContainer,
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
					{/* The Below View Should Be Replaced By Some Sort Of Touchable */}
					<View>
						<Text style={headerButtonText}>Back</Text>
					</View>
					<View style={headerTitlesContainer}>
						<Text style={headerTitleText}>Add Participants</Text>
						<Text style={headerSubTitleText}>
							0 / {Contacts.length}
						</Text>
					</View>
					<View>
						<Text style={headerButtonText}>Next</Text>
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
					<FlatList
						data={selectedContacts}
						keyExtractor={(item, index) => item + index}
						horizontal={true}
						renderItem={({ item }) => <SelectionItem item={item} />}
						ItemSeparatorComponent={() => (
							<View
								style={{
									width: 16,
								}}
							/>
						)}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{
							flexGrow: 1,
						}}
					/>
				</View>
			) : null}
			<View style={bodyContainer}>
				<SectionList
					sections={dataGetter()}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item }) => <SectionListItem item={item} />}
					stickySectionHeadersEnabled={true}
					renderSectionHeader={({ section: { title } }) => (
						<SectionListSectionHeader title={title} />
					)}
					ItemSeparatorComponent={() => <SectionListItemSeparator />}
					contentContainerStyle={{
						flexGrow: 1,
					}}
				/>
			</View>
		</View>
	);
};

export default ContactsScreen;
