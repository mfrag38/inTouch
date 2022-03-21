import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';
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
		isLoading,
		loaderSize,
		loaderColor,
	} = props;

	const { container } = styles;

	return (
		<TouchableOpacity
			onPress={onPress ?? onPress}
			disabled={onPress !== null ? false : true}
		>
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
				{isLoading ? (
					<>
						<View
							style={{
								width: '100%',
								height: '100%',
								flex: 1,
								position: 'absolute',
								top: 0,
								left: 0,
								elevation: 1,
								backgroundColor: '#00000074',
							}}
						/>
						<ActivityIndicator
							size={loaderSize ?? 24}
							color={loaderColor ?? Colors.White}
							style={{
								elevation: 2,
							}}
						/>
					</>
				) : (
					<Text
						style={{
							fontSize: 24,
							fontWeight: 'bold',
							color: titleColor,
						}}
					>
						{title}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default RoundedButton;
