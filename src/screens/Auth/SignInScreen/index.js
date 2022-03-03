import React, { useState, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BottomSheet from '../../../components/BottomSheet';
import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import MobileConfirmationScreen from '../MobileConfirmationScreen';
import { styles } from './style';

const SignInScreen = (props) => {
	const modalRef = useRef(null);
	const mobileRegex = /^(\+201|01|1)[0125][0-9]{8}$/;

	const [mobileNumber, setMobileNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onOpen = () => {
		modalRef.current?.open();
	};

	const onClose = () => {
		modalRef.current?.close();
	};

	const handleSignIn = () => {
		props.route.params.signInHandler();
	const [confirm, setConfirm] = useState(null);

	const [code, setCode] = useState('');

	const mobileNumberUnifier = (number) => {
		if (number.startsWith(1)) {
			number = '+20' + number;
		} else if (number.startsWith(0)) {
			number = '+2' + number;
		}
		return number;
	};

	const handleSignIn = async () => {
		if (mobileNumber.length === 0) {
			Alert.alert('Error', 'Please enter your mobile number.');
		} else {
			if (!mobileNumber.match(mobileRegex)) {
				Alert.alert('Error', 'Please enter a valid mobile number.');
			} else {
				// Loading
				const confirmation = await auth().signInWithPhoneNumber(
					mobileNumberUnifier(mobileNumber),
				);
				setConfirm(confirmation);
			}
		}
		// props.route.params.signInHandler();
	};

	const confirmCode = async () => {
		try {
			await confirm.confirm(code);
		} catch (error) {
			console.log('Confirm Error:', error);
		}
	};

	const handleSignUp = () => {
		props.navigation.navigate('SignUp');
	};

	const {
		container,
		topSpacer,
		titleContainer,
		titlePadding,
		titleText,
		bodyContainer,
		inputFormContainer,
		formContainerStyle,
		formTextFieldStyle,
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
							containerStyle={formContainerStyle}
							textFieldStyle={formTextFieldStyle}
							fields={[
								{
									placeholder: 'Mobile Number',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: mobileNumber,
									keyboardType: 'phone-pad',
									onChangeText: (text) =>
										setMobileNumber(text),
								},
								{
									placeholder: 'Code',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: code,
									onChangeText: (text) => setCode(text),
								},
								/* {
									placeholder: 'Email',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: email,
									keyboardType: 'email-address',
									onChangeText: (text) => setEmail(text),
								},
								{
									placeholder: 'Password',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: password,
									onChangeText: (text) => setPassword(text),
									secureTextEntry: true,
									rightComponent: () => (
										<TextButton
											title='Forgot?'
											titleColor={Colors.PrimaryColor}
											onPress={handleForgotPassword}
										/>
									),
								}, */
							]}
						/>
					</View>
					<View style={buttonContainer}>
						<RoundedButton
							width='100%'
							height={60}
							// title='Open Bottom Sheet'
							title='Sign in'
							titleColor='#fff'
							// onPress={onOpen}
							onPress={handleSignIn}
							borderRadius={30}
							backgroundColor={Colors.PrimaryColor}
						/>
						<RoundedButton
							width='100%'
							height={60}
							title='Confirm Code'
							titleColor='#fff'
							onPress={confirmCode}
							borderRadius={30}
							backgroundColor={Colors.PrimaryColor}
						/>
					</View>
					<View style={bodyFooterContainer}>
						<Text style={bodyFooterText}>Create account? </Text>
						<TextButton
							// title='Close Bottom Sheet'
							title='Sign up'
							titleColor={Colors.PrimaryColor}
							titleWeight='bold'
							// onPress={onClose}
							onPress={handleSignUp}
						/>
					</View>
				</View>
				<BottomSheet modalRef={modalRef}>
					<MobileConfirmationScreen onClose={onClose} />
				</BottomSheet>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignInScreen;
