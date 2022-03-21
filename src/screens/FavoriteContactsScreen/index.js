import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsList from '../../components/ContactsList';
import EmptyListComponent from '../../components/EmptyListComponent';
import { setIsContactsMultiSelect } from '../../redux/actions/contactsActions';
import {
	removeFromFavoriteContacts,
	removeAllFavoriteContacts,
	setIsFavoritesMultiSelect,
	switchFavoriteContactSelection,
	clearSelectedFavoriteContacts,
	searchFavoriteContacts,
	clearFavoriteSearchResult,
} from '../../redux/actions/favoriteContactsActions';
import { groupArrayBy } from '../../utils/arrayOperations';
import Colors from '../../constants/Colors';
import { styles } from './style';
import SelectionList from '../../components/SelectionList';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FavoriteContactsScreen = (props) => {
	const {
		favoriteContacts,
		isFavoritesMultiSelect,
		selectedFavoriteContacts,
		favoritesSearchResult,
	} = useSelector((state) => state.FavoriteContacts);
	const [favoriteSearchTerm, setFavoriteSearchTerm] = useState('');

	useEffect(() => {
		if (favoriteSearchTerm.length !== 0) {
			dispatch(searchFavoriteContacts(favoriteSearchTerm));
		} else {
			dispatch(clearFavoriteSearchResult());
		}
	}, [favoriteSearchTerm]);

	const dispatch = useDispatch();

	const {
		container,
		headerContainer,
		headerTopContainer,
		backButtonContainer,
		backButton,
		headerTitleContainer,
		headerTitleText,
		headerActionContainer,
		headerActionButton,
		headerBottomContainer,
		headerBottomLeadContainer,
		headerInputSearchFieldContainer,
		headerBottomTailContainer,
		headerBottomTailButton,
		bodyContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={headerContainer}>
				<View style={headerTopContainer}>
					<View style={backButtonContainer}>
						<TouchableHighlight
							style={backButton}
							underlayColor={Colors.DimGrayOpacity}
							onPress={
								isFavoritesMultiSelect
									? () => {
											dispatch(
												clearSelectedFavoriteContacts(),
											);
											dispatch(
												setIsFavoritesMultiSelect(
													false,
												),
											);
									  }
									: () => props.navigation.goBack()
							}
						>
							<Icon
								name={
									isFavoritesMultiSelect
										? 'close'
										: 'chevron-left'
								}
								size={24}
								color={Colors.PrimaryColor}
							/>
						</TouchableHighlight>
					</View>
					<View style={headerTitleContainer}>
						<Text style={headerTitleText}>Favorite Contacts</Text>
						<Text
							style={{
								color: Colors.White,
							}}
						>
							{isFavoritesMultiSelect
								? `${selectedFavoriteContacts.length} / `
								: null}
							{favoriteContacts.length}
						</Text>
					</View>
					{isFavoritesMultiSelect ? (
						<View style={headerActionContainer}>
							<TouchableHighlight
								style={headerActionButton}
								underlayColor={Colors.DimGrayOpacity}
								onPress={() => {
									dispatch(setIsFavoritesMultiSelect(false));
									dispatch(
										removeFromFavoriteContacts(
											selectedFavoriteContacts,
										),
									);
									dispatch(clearSelectedFavoriteContacts());
								}}
							>
								<Icon
									name='star-minus'
									size={30}
									color={Colors.PrimaryColor}
								/>
							</TouchableHighlight>
						</View>
					) : null}
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
							onChangeText={(text) => setFavoriteSearchTerm(text)}
							value={favoriteSearchTerm}
						/>
					</View>
					{favoriteSearchTerm.length !== 0 ? (
						<View style={headerBottomTailContainer}>
							<TouchableOpacity
								style={headerBottomTailButton}
								onPress={() => setFavoriteSearchTerm('')}
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
			{isFavoritesMultiSelect && selectedFavoriteContacts.length != 0 ? (
				<View
					style={{
						width: '100%',
					}}
				>
					<SelectionList
						selectedContacts={selectedFavoriteContacts}
						onDeselectionPress={(item) =>
							dispatch(switchFavoriteContactSelection(item))
						}
					/>
				</View>
			) : null}
			<View style={bodyContainer}>
				<ContactsList
					contacts={
						favoriteSearchTerm.length === 0
							? groupArrayBy(favoriteContacts, 'displayName')
							: groupArrayBy(favoritesSearchResult, 'displayName')
					}
					isContactsMultiSelect={isFavoritesMultiSelect}
					selectedContacts={selectedFavoriteContacts}
					onItemPress={(item) => {
						if (isFavoritesMultiSelect === true) {
							dispatch(switchFavoriteContactSelection(item));
						} else {
							Alert.alert(
								'Info',
								'Should go to contact details screen but it is not implemented.',
							);
						}
					}}
					onItemLongPress={(item) => {
						if (isFavoritesMultiSelect === true) {
							dispatch(switchFavoriteContactSelection(item));
						} else {
							dispatch(switchFavoriteContactSelection(item));
							dispatch(setIsFavoritesMultiSelect(true));
						}
					}}
					ListEmptyComponent={
						<EmptyListComponent
							text={`You have no favorite contacts,\nGo ahead and add some`}
							showButton
							buttonText='Add'
							buttonOnPress={() => {
								dispatch(setIsContactsMultiSelect(true));
								props.navigation.goBack();
							}}
						/>
					}
				/>
				{isFavoritesMultiSelect ? (
					<View
						style={{
							width: 56,
							height: 56,
							justifyContent: 'center',
							alignItems: 'center',
							position: 'absolute',
							right: 16,
							bottom: 16,
							borderRadius: 56,
							overflow: 'hidden',
							backgroundColor: Colors.PrimaryColor,
						}}
					>
						<TouchableHighlight
							style={{
								width: '100%',
								height: '100%',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => {
								Alert.alert(
									'Warning',
									'You are about to remove all your favorite contacts, Are you sure?',
									[
										{
											text: 'Remove All',
											style: 'destructive',
											onPress: () => {
												dispatch(
													setIsFavoritesMultiSelect(
														false,
													),
												);
												dispatch(
													removeAllFavoriteContacts(),
												);
												dispatch(
													clearSelectedFavoriteContacts(),
												);
											},
										},
										{
											text: 'Cancel',
											style: 'cancel',
										},
									],
								);
							}}
						>
							<Icon
								name='star-remove'
								color={Colors.White}
								size={30}
							/>
						</TouchableHighlight>
					</View>
				) : null}
			</View>
		</View>
	);
};

export default FavoriteContactsScreen;
