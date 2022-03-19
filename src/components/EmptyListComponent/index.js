import React from 'react';
import { View, Text } from 'react-native';
import RoundedButton from '../RoundedButton';
import Colors from '../../constants/Colors';
import { styles } from './style';

const EmptyListComponent = (props) => {
	const { text, buttonText, buttonOnPress } = props;

	const {
		container,
		separatorThreeAndHalf,
		textContainer,
		textStyle,
		separatorTwoAndHalf,
		buttonContainer,
		separatorOne,
	} = styles;

	return (
		<View style={container}>
			<View style={separatorThreeAndHalf} />
			<View style={textContainer}>
				<Text style={textStyle}>{text}</Text>
			</View>
			<View style={separatorTwoAndHalf} />
			<View style={buttonContainer}>
				<RoundedButton
					width='100%'
					height={60}
					title={buttonText}
					titleColor='#fff'
					onPress={buttonOnPress}
					borderRadius={30}
					backgroundColor={Colors.PrimaryColor}
				/>
			</View>
			<View style={separatorOne} />
		</View>
	);
};

export default EmptyListComponent;
