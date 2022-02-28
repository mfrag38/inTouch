import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const SignInScreen = (props) => {
	const [mobileNumber, setMobileNumber] = useState('');

	const handleSignIn = () => {
		console.log('Should Do Sign In');
	};

	const handleSignUp = () => {
		console.log('Should Go To Sign Up');
	};

	const {
		container,
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
				<View style={topSpacer} />
				<View style={titleContainer}>
					<View style={titlePadding}>
						<Text numberOfLines={2} style={titleText}>
							Welcome Back
						</Text>
					</View>
				</View>
				<View style={bodyContainer}>
					<View style={inputFormContainer}>
						<InputForm
							fields={[
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
							title='Sign in'
							titleColor='#fff'
							onPress={handleSignIn}
							borderRadius={30}
							backgroundColor={Colors.PrimaryColor}
						/>
					</View>
					<View style={bodyFooterContainer}>
						<Text style={bodyFooterText}>Create account? </Text>
						<TextButton
							title='Sign up'
							titleColor={Colors.PrimaryColor}
							titleWeight='bold'
							onPress={handleSignUp}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignInScreen;
