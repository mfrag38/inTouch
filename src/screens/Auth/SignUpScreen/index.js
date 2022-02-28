import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const SignUpScreen = (props) => {
	const [name, setName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');

	const handleSignUp = () => {
		console.log('Should Do Sign Up');
	};

	const handleSignIn = () => {
		console.log('Should Go To Sign In');
	};

	const {
		container,
		backButtonContainer,
		topSpacer,
		titleContainer,
		titlePadding,
		titleText,
		bodyContainer,
		inputFormContainer,
		buttonContainer,
		bodyFooterContainer,
		bodyFooterText,
	} = styles;

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={container}>
				<View style={backButtonContainer}>
					<Icon
						name='chevron-left'
						size={36}
						color={Colors.PrimaryColor}
					/>
				</View>
				<View style={topSpacer} />
				<View style={titleContainer}>
					<View style={titlePadding}>
						<Text numberOfLines={2} style={titleText}>
							Create Account
						</Text>
					</View>
				</View>
				<View style={bodyContainer}>
					<View style={inputFormContainer}>
						<InputForm
							fields={[
								{
									placeholder: 'Your name',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: name,
									onChangeText: (text) => setName(text),
								},
								{
									placeholder: 'Mobile Number',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: mobileNumber,
									onChangeText: (text) =>
										setMobileNumber(text),
									keyboardType: 'phone-pad',
								},
							]}
						/>
					</View>
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
					<View style={bodyFooterContainer}>
						<Text style={bodyFooterText}>Back to </Text>
						<TextButton
							title='Sign in'
							titleColor={Colors.PrimaryColor}
							titleWeight='bold'
							onPress={handleSignIn}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignUpScreen;
