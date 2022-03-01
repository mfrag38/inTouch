import React from 'react';
import { View } from 'react-native';
import TextField from '../TextField';

const InputForm = (props) => {
	const { fields, containerStyle, textFieldStyle } = props;

	return (
		<View style={containerStyle}>
			{fields.map((field, index) => (
				<View
					key={`${field.placeholder}-${index}`}
					style={textFieldStyle}
				>
					<TextField {...field} />
				</View>
			))}
		</View>
	);
};

export default InputForm;
