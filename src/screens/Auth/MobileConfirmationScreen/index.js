import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InputForm from '../../../components/InputForm';
import RoundedButton from '../../../components/RoundedButton';
import TextButton from '../../../components/TextButton';
import Colors from '../../../constants/Colors';
import { styles } from './style';

const MobileConfirmationScreen = (props) => {
	const { onClose } = props;

	const [code, setCode] = useState('');

	const {
		container,
		titleContainer,
		titlePadding,
		titleText,
		bodyContainer,
		inputFormContainer,
		formContainerStyle,
		formTextFieldStyle,
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
				<View style={inputFormContainer}>
					<InputForm
						containerStyle={formContainerStyle}
						textFieldStyle={formTextFieldStyle}
						fields={[
							{
								placeholder: 'Confirmation Code',
								placeholderColor: Colors.Gray,
								textColor: Colors.White,
								value: code,
								onChangeText: (text) => setCode(text),
							},
						]}
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
						Didn't receive the code?{' '}
					</Text>
					<TextButton
						title='Send it again!'
						titleColor={Colors.PrimaryColor}
						titleWeight='bold'
						onPress={() => console.log('Will Send It Again')}
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
						// onPress={handleSignIn}
						onPress={onClose}
						borderRadius={30}
						backgroundColor={Colors.PrimaryColor}
					/>
				</View>
			</View>
		</View>
	);
};

export default MobileConfirmationScreen;
