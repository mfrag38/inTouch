import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsList from '../../components/ContactsList';
import { groupArrayBy } from '../../utils/arrayOperations';
import Colors from '../../constants/Colors';
import { styles } from './style';

const FavoriteContacts = [
	{
		contactName: 'Lee Barber',
		contactStatus: 'fugiat eiusmod Lorem pariatur est officia',
		contactIcon: 'L',
	},
	{
		contactName: 'Debora Gomez',
		contactStatus:
			'adipisicing esse exercitation consequat pariatur officia',
		contactIcon: 'D',
	},
	{
		contactName: 'White Mcbride',
		contactStatus: 'ut laboris adipisicing veniam dolore nisi',
		contactIcon: 'W',
	},
	{
		contactName: 'Marta Daniels',
		contactStatus: 'reprehenderit eiusmod non laboris aliqua sunt',
		contactIcon: 'M',
	},
	{
		contactName: 'Adeline Dudley',
		contactStatus: 'minim est aliquip veniam proident qui',
		contactIcon: 'A',
	},
	{
		contactName: 'Donaldson Talley',
		contactStatus: 'labore excepteur enim nostrud eu sint',
		contactIcon: 'D',
	},
	{
		contactName: 'Mathis Ford',
		contactStatus: 'commodo aute culpa exercitation est et',
		contactIcon: 'M',
	},
	{
		contactName: 'Cannon Harrell',
		contactStatus: 'minim est adipisicing nulla et laborum',
		contactIcon: 'C',
	},
	{
		contactName: 'Hooper Michael',
		contactStatus: 'mollit deserunt deserunt enim proident deserunt',
		contactIcon: 'H',
	},
	{
		contactName: 'Mckay Perry',
		contactStatus: 'excepteur sint labore sint sint qui',
		contactIcon: 'M',
	},
	{
		contactName: 'Kirk Wong',
		contactStatus: 'Lorem duis nostrud est amet anim',
		contactIcon: 'K',
	},
	{
		contactName: 'Mitchell Fulton',
		contactStatus: 'quis laboris et esse aliqua culpa',
		contactIcon: 'M',
	},
	{
		contactName: 'Eddie Wilkinson',
		contactStatus: 'adipisicing ad laborum eiusmod in esse',
		contactIcon: 'E',
	},
	{
		contactName: 'Thompson Swanson',
		contactStatus: 'non nisi laboris aliqua commodo id',
		contactIcon: 'T',
	},
	{
		contactName: 'Oliver Schmidt',
		contactStatus: 'magna eu officia deserunt et nisi',
		contactIcon: 'O',
	},
	{
		contactName: 'Virginia Benson',
		contactStatus: 'duis qui sunt mollit aute consectetur',
		contactIcon: 'V',
	},
	{
		contactName: 'Olson Mathews',
		contactStatus: 'ea laborum dolore nisi consectetur ea',
		contactIcon: 'O',
	},
	{
		contactName: 'Wyatt Pugh',
		contactStatus: 'Lorem proident nisi ex duis aute',
		contactIcon: 'W',
	},
	{
		contactName: 'Lina Simon',
		contactStatus: 'dolore tempor fugiat tempor esse cillum',
		contactIcon: 'L',
	},
	{
		contactName: 'James Larsen',
		contactStatus: 'id irure ullamco duis consectetur aute',
		contactIcon: 'J',
	},
	{
		contactName: 'Ruby Mueller',
		contactStatus: 'laborum nostrud officia id sint consequat',
		contactIcon: 'R',
	},
	{
		contactName: 'Earlene Crawford',
		contactStatus: 'dolore non duis ad aliqua reprehenderit',
		contactIcon: 'E',
	},
];

const FavoriteContactsScreen = (props) => {
	const {
		container,
		headerContainer,
		backButtonContainer,
		headerTitleContainer,
		headerTitleText,
		bodyContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={headerContainer}>
				<View style={backButtonContainer}>
					<Icon
						name='chevron-left'
						size={36}
						color={Colors.PrimaryColor}
					/>
				</View>
				<View style={headerTitleContainer}>
					<Text style={headerTitleText}>Favorite Contacts</Text>
				</View>
			</View>
			<View style={bodyContainer}>
				<ContactsList
					contacts={groupArrayBy(FavoriteContacts, 'contactIcon')}
				/>
			</View>
		</View>
	);
};

export default FavoriteContactsScreen;
