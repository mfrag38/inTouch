import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const AdditionalUserInfoScreen = (props) => {
	const [name, setName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');

	const {
		container,
		headerContainer,
		backButtonContainer,
		headerTitleContainer,
		headerTitleText,
		bodyContainer,
		inputFormContainer,
		formContainerStyle,
		formTextFieldStyle,
		spacer,
		buttonContainer,
		bottomSpacer,
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
					<Text style={headerTitleText}>Complete your profile</Text>
				</View>
			</View>
			<View style={bodyContainer}>
				<View style={inputFormContainer}>
					<InputForm
						containerStyle={formContainerStyle}
						textFieldStyle={formTextFieldStyle}
						fields={[
							{
								placeholder: 'Your name',
								placeholderColor: Colors.Gray,
								textColor: Colors.White,
								value: name,
								onChangeText: (text) => setName(text),
							},
							{
								placeholder: 'Your mobile number',
								placeholderColor: Colors.Gray,
								textColor: Colors.White,
								value: mobileNumber,
								keyboardType: 'phone-pad',
								onChangeText: (text) => setMobileNumber(text),
							},
						]}
					/>
				</View>
				<View style={spacer} />
				<View style={buttonContainer}>
					<RoundedButton
						width='100%'
						height={60}
						title='Sign up'
						titleColor='#fff'
						// onPress={handleSignUp}
						borderRadius={30}
						backgroundColor={Colors.PrimaryColor}
					/>
				</View>
				<View style={bottomSpacer} />
			</View>
		</View>
	);
};

export default AdditionalUserInfoScreen;
