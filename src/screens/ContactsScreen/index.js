import React, { useEffect, useCallback, useRef, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	PermissionsAndroid,
	Alert,
	Linking,
	ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import ContactsList from '../../components/ContactsList';
import SelectionList from '../../components/SelectionList';
import EmptyListComponent from '../../components/EmptyListComponent';
import { setIsAuthenticated } from '../../redux/actions/authActions';
import {
	fetchContacts,
	setIsContactsLoading,
	setIsContactsMultiSelect,
	clearSelectedContacts,
	switchContactSelection,
	deselectContact,
	searchContacts,
	clearSearchResult,
} from '../../redux/actions/contactsActions';
import { addToFavoriteContacts } from '../../redux/actions/favoriteContactsActions';
import { groupArrayBy } from '../../utils/arrayOperations';
import Colors from '../../constants/Colors';
import { styles } from './style';

const ContactsScreen = (props) => {
	const {
		contacts,
		isContactsLoading,
		isContactsMultiSelect,
		selectedContacts,
		searchResult,
	} = useSelector((state) => state.Contacts);
	const { favoriteContacts } = useSelector((state) => state.FavoriteContacts);
	const [searchTerm, setSearchTerm] = useState('');

	const listRef = useRef();

	const dispatch = useDispatch();

	useEffect(() => {
		contactsInitializer();
	}, []);

	useEffect(() => {
		if (searchTerm.length !== 0) {
			dispatch(searchContacts(searchTerm));
		} else {
			dispatch(clearSearchResult());
			contactsInitializer();
		}
	}, [searchTerm]);

	const contactsInitializer = () => {
		dispatch(setIsContactsLoading(true));
		if (contacts === null) {
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
								dispatch(setIsContactsLoading(false));
								dispatch(fetchContacts(contacts));
							})
							.catch((error) => {
								console.warn('Getting Contacts Error:', error);
								dispatch(setIsContactsLoading(false));
								Alert.alert(
									'Error',
									'Some error happened while fetching your contacts.',
								);
							});
					} else if (res === 'denied') {
						dispatch(setIsContactsLoading(false));
						contactsInitializer();
					} else if (res === 'never_ask_again') {
						dispatch(setIsContactsLoading(false));
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
					console.warn('Granting Permission Error:', error);
					dispatch(setIsContactsLoading(false));
					Alert.alert(
						'Error',
						'Some error happened while granting permission.',
					);
				});
		} else {
			dispatch(setIsContactsLoading(false));
		}
	};

	const signOutHandler = () => {
		auth()
			.signOut()
			.then(() => {
				dispatch(setIsAuthenticated(false));
			})
			.catch((error) => {
				console.warn('Sign Out Error:', error);
				Alert.alert(
					'Error',
					'Some error happened while singing you out.',
					[
						{
							text: 'Sign Out Anyway',
							onPress: () => dispatch(setIsAuthenticated(false)),
						},
						{
							text: 'Try Again!',
							style: 'cancel',
							onPress: signOutHandler,
						},
					],
				);
			});
	};

	const handleAddToFavorites = () => {
		if (selectedContacts.length > 1) {
			var flag = 0;
			selectedContacts.forEach((contact) => {
				if (
					favoriteContacts.some(
						(favContact) =>
							favContact.displayName === contact.displayName,
					)
				) {
					Alert.alert(
						'Error',
						`${contact.displayName} already in favorites, Remove from selection`,
						[
							{
								text: 'Remove',
								style: 'destructive',
								onPress: () => {
									dispatch(deselectContact(contact));
								},
							},
							{
								text: 'Cancel',
								style: 'cancel',
							},
						],
					);
				} else {
					flag = flag + 1;
				}
			});
			if (flag === selectedContacts.length) {
				dispatch(addToFavoriteContacts(selectedContacts));
				dispatch(setIsContactsMultiSelect(false));
				dispatch(clearSelectedContacts());
			}
		} else {
			if (
				favoriteContacts.some(
					(favContact) =>
						favContact.displayName ===
						selectedContacts[0].displayName,
				)
			) {
				Alert.alert(
					'Error',
					`${selectedContacts[0].displayName} already in favorites, Remove from selection`,
					[
						{
							text: 'Remove',
							style: 'destructive',
							onPress: () => {
								dispatch(deselectContact(contact));
								dispatch(setIsContactsMultiSelect(false));
								dispatch(clearSelectedContacts());
							},
						},
						{
							text: 'Cancel',
							style: 'cancel',
						},
					],
				);
			} else {
				dispatch(addToFavoriteContacts(selectedContacts));
				dispatch(setIsContactsMultiSelect(false));
				dispatch(clearSelectedContacts());
			}
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
		headerBottomLeadContainer,
		headerInputSearchFieldContainer,
		headerBottomTailContainer,
		headerBottomTailButton,
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
							onPress={
								isContactsMultiSelect
									? () => {
											dispatch(
												setIsContactsMultiSelect(false),
											);
											dispatch(clearSelectedContacts());
									  }
									: signOutHandler
							}
						>
							<Icon
								name={
									isContactsMultiSelect ? 'close' : 'logout'
								}
								size={30}
								color={Colors.PrimaryColor}
							/>
						</TouchableHighlight>
					</View>
					<View style={headerTitlesContainer}>
						<Text style={headerTitleText}>Contacts</Text>
						{isContactsMultiSelect ? (
							<Text style={headerSubTitleText}>
								{selectedContacts.length} / {contacts.length}
							</Text>
						) : null}
					</View>
					<View style={headerActionContainer}>
						<TouchableHighlight
							style={headerActionButton}
							underlayColor={Colors.DimGrayOpacity}
							onPress={
								isContactsMultiSelect
									? handleAddToFavorites
									: () =>
											props.navigation.navigate(
												'FavoriteContacts',
											)
							}
						>
							<Icon
								name={
									isContactsMultiSelect ? 'star-plus' : 'star'
								}
								size={30}
								color={Colors.PrimaryColor}
							/>
						</TouchableHighlight>
					</View>
				</View>
				<View style={headerBottomContainer}>
					<View style={headerBottomLeadContainer}>
						<Icon name='magnify' size={24} color={Colors.Grey} />
					</View>
					<View style={headerInputSearchFieldContainer}>
						<TextInput
							numberOfLines={1}
							placeholder='Search'
							placeholderTextColor={Colors.Grey}
							style={{
								color: Colors.White,
							}}
							onChangeText={(text) => setSearchTerm(text)}
							value={searchTerm}
						/>
					</View>
					{searchTerm.length !== 0 ? (
						<View style={headerBottomTailContainer}>
							<TouchableOpacity
								style={headerBottomTailButton}
								onPress={() => setSearchTerm('')}
							>
								<Icon
									name='close'
									size={24}
									color={Colors.Grey}
								/>
							</TouchableOpacity>
						</View>
					) : null}
				</View>
			</View>
			{isContactsMultiSelect && selectedContacts.length !== 0 ? (
				<View style={selectionAreaContainer}>
					<SelectionList
						selectedContacts={selectedContacts}
						onDeselectionPress={(item) =>
							dispatch(switchContactSelection(item))
						}
					/>
				</View>
			) : null}
			<View style={bodyContainer}>
				{isContactsLoading === true ? (
					<ActivityIndicator size={64} color={Colors.White} />
				) : (
					<ContactsList
						listRef={listRef}
						contacts={
							searchTerm.length === 0
								? contacts
									? groupArrayBy(contacts, 'displayName')
									: []
								: groupArrayBy(searchResult, 'displayName')
						}
						isContactsMultiSelect={isContactsMultiSelect}
						selectedContacts={selectedContacts}
						onItemPress={(item) => {
							if (isContactsMultiSelect === true) {
								dispatch(switchContactSelection(item));
							} else {
								Alert.alert(
									'Info',
									'Should go to contact details screen but it is not implemented.',
								);
							}
						}}
						onItemLongPress={(item) => {
							if (isContactsMultiSelect === true) {
								dispatch(switchContactSelection(item));
							} else {
								dispatch(switchContactSelection(item));
								dispatch(setIsContactsMultiSelect(true));
							}
						}}
						ListEmptyComponent={
							<EmptyListComponent
								text={`You have no contacts,${'\n'}Allow the app to view your contacts`}
								showButton
								buttonText='Allow'
								buttonOnPress={contactsInitializer}
							/>
						}
					/>
				)}
			</View>
		</View>
	);
};

export default ContactsScreen;
