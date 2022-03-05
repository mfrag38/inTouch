import React, { useMemo } from 'react';
import Animated, {
	interpolateColor,
	useAnimatedStyle,
} from 'react-native-reanimated';
import Colors from '../../../constants/Colors';

const ModalBottomSheetBackground = ({ animatedIndex, style }) => {
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		backgroundColor: interpolateColor(
			animatedIndex.value,
			[1, 0],
			[Colors.BackgroundColor, '#000000'],
		),
	}));

	const containerStyle = useMemo(
		() => [style, containerAnimatedStyle],
		[style, containerAnimatedStyle],
	);

	return (
		<Animated.View
			pointerEvents='none'
			style={[
				containerStyle,
				{
					borderTopLeftRadius: 16,
					borderTopRightRadius: 16,
					overflow: 'hidden',
				},
			]}
		/>
	);
};

export default ModalBottomSheetBackground;
