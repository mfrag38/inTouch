import React from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contacts from 'react-native-contacts';
import ContactsList from '../../components/ContactsList';
import { groupArrayBy } from '../../utils/arrayOperations';
import Colors from '../../constants/Colors';
import { styles } from './style';

const FavoriteContactsScreen = (props) => {
	const {
		container,
		headerContainer,
		backButtonContainer,
		backButton,
		headerTitleContainer,
		headerTitleText,
		bodyContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={headerContainer}>
				<View style={backButtonContainer}>
					<TouchableHighlight
						style={backButton}
						underlayColor={Colors.DimGrayOpacity}
						onPress={() => props.navigation.goBack()}
					>
						<Icon
							name='chevron-left'
							size={36}
							color={Colors.PrimaryColor}
						/>
					</TouchableHighlight>
				</View>
				<View style={headerTitleContainer}>
					<Text style={headerTitleText}>Favorite Contacts</Text>
				</View>
			</View>
			<View style={bodyContainer}>
				{/* <ContactsList
					contacts={groupArrayBy(FavoriteContacts, 'displayName')}
				/> */}
				<Text>Favorite Contacts List</Text>
			</View>
		</View>
	);
};

export default FavoriteContactsScreen;
