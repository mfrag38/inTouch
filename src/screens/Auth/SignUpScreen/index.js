import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const SignUpScreen = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleSignUp = () => {
		console.log('Should Do Sign Up');
	};

	const handleSignIn = () => {
		console.log('Should Go To Sign In');
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
									value: name,
									onChangeText: (text) => setName(text),
								},
								{
									placeholder: 'Your email',
									value: email,
									onChangeText: (text) => setEmail(text),
								},
								{
									placeholder: 'Password',
									value: password,
									onChangeText: (text) => setPassword(text),
									secureTextEntry: true,
								},
								{
									placeholder: 'Confirm Password',
									value: passwordConfirm,
									onChangeText: (text) =>
										setPasswordConfirm(text),
									secureTextEntry: true,
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
							backgroundColor={Colors.primaryColor}
						/>
					</View>
					<View style={bodyFooterContainer}>
						<Text>Back to </Text>
						<TextButton
							title='Sign in'
							titleColor={Colors.primaryColor}
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
