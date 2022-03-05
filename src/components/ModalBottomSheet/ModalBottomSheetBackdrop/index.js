import React, { useMemo } from 'react';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from 'react-native-reanimated';

const ModalBottomSheetBackdrop = ({ animatedIndex, style }) => {
	const containerAnimatedStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			animatedIndex.value,
			[0, 1],
			[0, 1],
			Extrapolate.CLAMP,
		),
	}));

	const containerStyle = useMemo(
		() => [
			style,
			{
				backgroundColor: '#00000078',
			},
			containerAnimatedStyle,
		],
		[style, containerAnimatedStyle],
	);

	return <Animated.View style={containerStyle} />;
};

export default ModalBottomSheetBackdrop;
