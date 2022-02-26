import React from 'react';
import { Pressable, Text } from 'react-native';

const TextButton = (props) => {
	const { title, titleColor, titleWeight, onPress } = props;

	return (
		<Pressable onPress={onPress}>
			<Text
				style={{
					fontWeight: titleWeight ?? titleWeight,
					color: titleColor,
				}}
			>
				{title}
			</Text>
		</Pressable>
	);
};

export default TextButton;
