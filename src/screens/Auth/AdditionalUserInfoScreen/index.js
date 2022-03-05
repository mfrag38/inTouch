import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const AdditionalUserInfoScreen = (props) => {
	const { userId } = props;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSignUp = () => {
		if (name.length === 0) {
			Alert.alert('Error', 'Please type your name.');
		} else if (email.length === 0) {
			Alert.alert('Error', 'Please type your email.');
		} else {
			Promise.all([
				auth().currentUser.updateProfile({
					displayName: name,
				}),
				auth().currentUser.updateEmail(email),
			])
				.then((res) => {
					// TODO: Store Auth State And User Info And Go To Home Screen
					props.route.params.signInHandler();
				})
				.catch((error) => {
					console.log('Update User Info Error:', error);
				});
		}
	};

	const {
		container,
		headerContainer,
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
				<View style={headerTitleContainer}>
					<Text style={headerTitleText}>Complete your profile</Text>
				</View>
			</View>
			<View style={bodyContainer}>
				<View
					style={{
						flex: 1,
					}}
				/>
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
								placeholder: 'Email',
								placeholderColor: Colors.Gray,
								textColor: Colors.White,
								value: email,
								keyboardType: 'email-address',
								onChangeText: (text) => setEmail(text),
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
						onPress={handleSignUp}
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
