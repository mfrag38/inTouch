import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const SignInScreen = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = () => {
		console.log('Should Do Sign In');
	};

	const handleForgotPassword = () => {
		console.log('Should Go To Forgot Password');
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
									placeholder: 'Email',
									value: email,
									onChangeText: (text) => setEmail(text),
								},
								{
									placeholder: 'Password',
									value: password,
									onChangeText: (text) => setPassword(text),
									secureTextEntry: true,
									rightComponent: () => (
										<TextButton
											title='Forgot?'
											titleColor={Colors.primaryColor}
											onPress={handleForgotPassword}
										/>
									),
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
							backgroundColor={Colors.primaryColor}
						/>
					</View>
					<View style={bodyFooterContainer}>
						<Text>Create account? </Text>
						<TextButton
							title='Sign up'
							titleColor={Colors.primaryColor}
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
