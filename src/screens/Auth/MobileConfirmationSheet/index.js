import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import mobileNumberUnifier from '../../../utils/mobileNumberUnifier';
import {
	setIsConfirmLoading,
	setIsAuthenticated,
} from '../../../redux/actions/authActions';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const MobileConfirmationSheet = (props) => {
	const { dismiss, mobileNumber } = props;

	const { confirmation, isConfirmLoading } = useSelector(
		(state) => state.Auth,
	);

	const dispatch = useDispatch();

	let timer;

	const [underlineColor, setUnderlineColor] = useState(Colors.AccentColor);
	const [isResent, setIsResent] = useState(false);
	const [code, setCode] = useState('');
	const [count, setCount] = useState(30);
	const [reconfirm, setReconfirm] = useState(null);

	useEffect(() => {
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (isResent === true) {
			timer = setTimeout(() => {
				if (count !== 0) {
					setCount(count - 1);
				} else {
					setIsResent(false);
					clearTimeout(timer);
				}
			}, 1000);
		} else {
			setCount(30);
			clearTimeout(timer);
		}
	}, [isResent, count]);

	const confirmVerificationCode = () => {
		if (code.length === 0) {
			Alert.alert('Error', 'Please type confirmation code');
		} else {
			dispatch(setIsConfirmLoading(true));
			if (reconfirm === null) {
				confirmation
					.confirm(code)
					.then((res) => {
						if (res.additionalUserInfo.isNewUser === true) {
							dispatch(setIsConfirmLoading(false));
							dismiss();
							props.navigation.navigate('AdditionalUserInfo');
						} else {
							dispatch(setIsConfirmLoading(false));
							dispatch(setIsAuthenticated(true));
						}
					})
					.catch((error) => {
						console.warn('Code Verification Error:', error);
						dispatch(setIsConfirmLoading(false));
						Alert.alert('Error', 'Invalid Verification Code', [
							{
								text: 'OK',
								onPress: () => setCode(''),
							},
						]);
					});
			} else {
				reconfirm
					.confirm(code)
					.then((res) => {
						if (res.additionalUserInfo.isNewUser === true) {
							dispatch(setIsConfirmLoading(false));
							dismiss();
							props.navigation.navigate('AdditionalUserInfo');
						} else {
							dispatch(setIsConfirmLoading(false));
							dispatch(setIsAuthenticated(true));
						}
					})
					.catch((error) => {
						console.warn('Code Verification Error:', error);
						dispatch(setIsConfirmLoading(false));
						Alert.alert('Error', 'Invalid Verification Code', [
							{
								text: 'OK',
								onPress: () => setCode(''),
							},
						]);
					});
			}
		}
	};

	const handleResendCode = async () => {
		setIsResent(true);
		setReconfirm(
			await auth().signInWithPhoneNumber(
				mobileNumberUnifier(mobileNumber),
				true,
			),
		);
	};

	const {
		container,
		titleContainer,
		titlePadding,
		titleText,
		bodyContainer,
	} = styles;

	return (
		<View style={container}>
			<View style={titleContainer}>
				<View style={titlePadding}>
					<Text numberOfLines={2} style={titleText}>
						Confirm Your Identity
					</Text>
				</View>
			</View>
			<View style={bodyContainer}>
				<View
					style={{
						borderBottomWidth: 2,
						borderBottomColor: underlineColor,
					}}
				>
					<BottomSheetTextInput
						placeholder='Confirmation Code'
						placeholderTextColor={Colors.Gray}
						value={code}
						onChangeText={(text) => setCode(text)}
						onFocus={() => setUnderlineColor(Colors.PrimaryColor)}
						onBlur={() => setUnderlineColor(Colors.AccentColor)}
						style={{
							color: Colors.White,
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						marginTop: 16,
						marginBottom: 24,
					}}
				>
					<Text style={{ color: Colors.White }}>
						{isResent
							? 'You can resend the code again after '
							: "Didn't receive the code? "}
					</Text>
					<TextButton
						title={isResent ? count : 'Send it again!'}
						titleColor={
							isResent ? Colors.White : Colors.PrimaryColor
						}
						titleWeight='bold'
						onPress={isResent ? null : handleResendCode}
					/>
				</View>
				<View
					style={{
						marginVertical: 16,
					}}
				>
					<RoundedButton
						width='100%'
						height={60}
						title='Confirm'
						titleColor='#fff'
						isLoading={isConfirmLoading}
						onPress={
							isConfirmLoading === true
								? null
								: confirmVerificationCode
						}
						borderRadius={30}
						backgroundColor={Colors.PrimaryColor}
					/>
				</View>
			</View>
		</View>
	);
};

export default MobileConfirmationSheet;
