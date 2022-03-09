import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	PermissionsAndroid,
	Alert,
	Linking,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsList from '../../components/ContactsList';
import SelectionList from '../../components/SelectionList';
import Colors from '../../constants/Colors';
import { groupArrayBy } from '../../utils/arrayOperations';
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
	const [isLoading, setIsLoading] = useState(false);
	const [contactsState, setContactsState] = useState(null);

	useEffect(() => {
		contactsInitializer();
	}, []);

	const contactsInitializer = () => {
		setIsLoading(true);
		if (contactsState === null) {
			PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				{
					title: 'inTouch',
					message:
						'inTouch would have access to view your contacts in order to work as expected',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				},
			)
				.then((res) => {
					if (res === 'granted') {
						Contacts.getAll()
							.then((contacts) => {
								setContactsState(contacts);
							})
							.catch((error) => {
								console.log('Getting Contacts Error:', error);
							});
					} else if (res === 'denied') {
						contactsInitializer();
					} else if (res === 'never_ask_again') {
						Alert.alert(
							'Permission required',
							'You have to grant permission to view your contacts.',
							[
								{
									text: 'Cancel',
									style: 'cancel',
								},
								{
									text: 'Allow',
									onPress: () => Linking.openSettings(),
									style: 'default',
								},
							],
						);
					}
				})
				.catch((error) => {
					console.log('Granting Permission Error:', error);
				});
		}
	};

	const {
		container,
		headerContainer,
		headerTopContainer,
		headerActionContainer,
		headerActionButton,
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
					<View style={headerActionContainer}>
						<TouchableHighlight
							style={headerActionButton}
							underlayColor={Colors.DimGrayOpacity}
							onPress={() => props.route.params.signOutHandler()}
						>
							<Icon
								name='logout'
								size={30}
								color={Colors.SecondaryColor}
							/>
						</TouchableHighlight>
					</View>
					<View style={headerTitlesContainer}>
						<Text style={headerTitleText}>Contacts</Text>
						<Text style={headerSubTitleText}>
							0 / {Contacts.length}
						</Text>
					</View>
					<View style={headerActionContainer}>
						<TouchableHighlight
							style={headerActionButton}
							underlayColor={Colors.DimGrayOpacity}
							onPress={() =>
								props.navigation.navigate('FavoriteContacts')
							}
						>
							<Icon
								name='account-star'
								size={30}
								color={Colors.SecondaryColor}
							/>
						</TouchableHighlight>
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
					contacts={
						contactsState
							? groupArrayBy(contactsState, 'displayName')
							: []
					}
				/>
			</View>
		</View>
	);
};

export default ContactsScreen;
