import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableHighlight,
	Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const SignUpScreen = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleSignUp = () => {
		props.navigation.navigate('AdditionalUserInfo', {
			signUpHandler: props.route.params.signUpHandler,
		});
	};

	const handleSignIn = () => {
		props.navigation.goBack();
	};

	const {
		container,
		backButtonContainer,
		backButton,
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
							containerStyle={formContainerStyle}
							textFieldStyle={formTextFieldStyle}
							fields={[
								/* {
									placeholder: 'Your name',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: name,
									onChangeText: (text) => setName(text),
								}, */
								{
									placeholder: 'Your email',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: email,
									keyboardType: 'email-address',
									onChangeText: (text) => setEmail(text),
								},
								/* {
									placeholder: 'Your mobile number',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: mobileNumber,
									keyboardType: 'phone-pad',
									onChangeText: (text) =>
										setMobileNumber(text),
								}, */
								{
									placeholder: 'Password',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
									value: password,
									onChangeText: (text) => setPassword(text),
									secureTextEntry: true,
								},
								{
									placeholder: 'Confirm Password',
									placeholderColor: Colors.Gray,
									textColor: Colors.White,
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
