import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Portal } from '@gorhom/portal';
import { Modalize } from 'react-native-modalize';
import { styles } from './style';

const { height } = Dimensions.get('screen');
const modalHeight = height * 0.5;

const BottomSheet = (props) => {
	const { modalRef } = props;

	const { container } = styles;

	return (
		<Portal>
			<Modalize ref={modalRef} modalHeight={modalHeight}>
				{props.children}
			</Modalize>
		</Portal>
	);
};

export default BottomSheet;
