import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import { styles } from './style';

const TextField = (props) => {
	const [isFocused, setIsFocused] = useState(false);

	const {
		placeholder,
		value,
		onChangeText,
		secureTextEntry,
		rightComponent,
	} = props;

	const { container } = styles;

	return (
		<View
			style={[
				container,
				{
					borderBottomColor: isFocused
						? Colors.primaryColor
						: Colors.accentColor,
				},
			]}
		>
			<TextInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
				style={{
					flex: 1,
				}}
			/>
			{rightComponent ? rightComponent() : null}
		</View>
	);
};

export default TextField;
