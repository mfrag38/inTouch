import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const RoundedButton = (props) => {
	const {
		width,
		height,
		title,
		titleColor,
		backgroundColor,
		borderWidth,
		borderColor,
		borderRadius,
		onPress,
	} = props;

	const { container } = styles;

	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={[
					container,
					{
						width: width,
						height: height,
						borderWidth: borderWidth ? borderWidth : null,
						borderColor: borderColor ? borderColor : null,
						borderRadius: borderRadius,
						backgroundColor: backgroundColor,
					},
				]}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						color: titleColor,
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RoundedButton;
