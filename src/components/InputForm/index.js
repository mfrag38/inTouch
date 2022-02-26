import React from 'react';
import { View, Text } from 'react-native';
import TextField from '../TextField';
import TextButton from '../TextButton';
import Colors from '../../constants/Colors';
import { styles } from './style';

const InputForm = (props) => {
	const { fields } = props;

	const { container, textInputContainer } = styles;

	return (
		<View style={container}>
			{fields.map((field, index) => (
				<View
					key={`${field.placeholder}-${index}`}
					style={textInputContainer}
				>
					<TextField {...field} />
				</View>
			))}
		</View>
	);
};

export default InputForm;
