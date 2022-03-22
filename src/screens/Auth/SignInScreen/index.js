import React, { useState, useRef } from 'react';
import ModalBottomSheet from '../../../components/ModalBottomSheet';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import MobileConfirmationSheet from '../MobileConfirmationSheet';
import {
	setIsAuthLoading,
	setConfirmation,
} from '../../../redux/actions/authActions';
import mobileNumberUnifier from '../../../utils/mobileNumberUnifier';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const mobileRegex = /^(\+201|01|1)[0125][0-9]{8}$/;

const SignInScreen = (props) => {
	const bottomSheetModalRef = useRef(null);

	const { isAuthLoading } = useSelector((state) => state.Auth);
	const [mobileNumber, setMobileNumber] = useState('');

	const dispatch = useDispatch();

	const presentBottomSheet = () => {
		bottomSheetModalRef.current?.present();
	};

	const dismissBottomSheet = () => {
		bottomSheetModalRef.current?.dismiss();
	};

	const handleSignIn = () => {
		if (mobileNumber.length === 0) {
			Alert.alert('Error', 'Please enter your mobile number.');
		} else {
			if (!mobileNumber.match(mobileRegex)) {
				Alert.alert('Error', 'Please enter a valid mobile number.');
			} else {
				dispatch(setIsAuthLoading(true));
				auth()
					.signInWithPhoneNumber(
						mobileNumberUnifier(mobileNumber),
						false,
					)
					.then((confirmation) => {
						dispatch(setIsAuthLoading(false));
						dispatch(setConfirmation(confirmation));
						presentBottomSheet();
					})
					.catch((error) => {
						console.warn('Sign In Error:', error);
						dispatch(setIsAuthLoading(false));
						Alert.alert(
							'Error',
							'Some error happened while signing you in.',
							[
								{
									text: 'Cancel',
									style: 'cancel',
								},
								{
									text: 'Try again',
									style: 'cancel',
									onPress: handleSignIn,
								},
							],
						);
					});
			}
		}
	};

	const {
		container,
		topSpacer,
		headerContainer,
		titleContainer,
		titlePadding,
		titleText,
		descriptionContainer,
		descriptionText,
		bodyContainer,
		inputFormContainer,
		formContainerStyle,
		formTextFieldStyle,
		buttonContainer,
		bodyBottomSpacer,
	} = styles;

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={container}>
				<View style={topSpacer} />
				<View style={headerContainer}>
					<View style={titleContainer}>
						<View style={titlePadding}>
							<Text numberOfLines={2} style={titleText}>
								Welcome to{`\n`}inTouch
							</Text>
						</View>
					</View>
					<View style={descriptionContainer}>
						<Text style={descriptionText}>
							inTouch is your contact keeper.
						</Text>
						<Text style={descriptionText}>
							Please type your mobile number to sign in or sign
							up.
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
							]}
						/>
					</View>
					<View style={buttonContainer}>
						<RoundedButton
							width='100%'
							height={60}
							title='Continue'
							titleColor='#fff'
							isLoading={isAuthLoading}
							onPress={
								isAuthLoading === true ? null : handleSignIn
							}
							borderRadius={30}
							backgroundColor={Colors.PrimaryColor}
						/>
					</View>
					<View style={bodyBottomSpacer} />
				</View>
				<ModalBottomSheet bottomSheetModalRef={bottomSheetModalRef}>
					<MobileConfirmationSheet
						dismiss={dismissBottomSheet}
						mobileNumber={mobileNumber}
						navigation={props.navigation}
					/>
				</ModalBottomSheet>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignInScreen;
