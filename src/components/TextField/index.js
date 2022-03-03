import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import { styles } from './style';

const TextField = (props) => {
	const [isFocused, setIsFocused] = useState(false);

	const {
		placeholder,
		placeholderColor,
		textColor,
		value,
		onChangeText,
		secureTextEntry,
		leftComponent,
		rightComponent,
		keyboardType,
	} = props;

	const { container } = styles;

	return (
		<View
			style={[
				container,
				{
					borderBottomColor: isFocused
						? Colors.PrimaryColor
						: Colors.AccentColor,
				},
			]}
		>
			{leftComponent ? leftComponent() : null}
			<TextInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder={placeholder}
				placeholderTextColor={placeholderColor}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				// keyboardType='phone-pad'
				style={{
					flex: 1,
					color: textColor,
				}}
			/>
			{rightComponent ? rightComponent() : null}
		</View>
	);
};

export default TextField;
