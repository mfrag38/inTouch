import React, { useMemo } from 'react';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import ModalBottomSheetBackdrop from './ModalBottomSheetBackdrop';
import ModalBottomSheetBackground from './ModalBottomSheetBackground';
import Colors from '../../constants/Colors';

const ModalBottomSheet = (props) => {
	const { bottomSheetModalRef } = props;

	const snapPoints = useMemo(() => ['25%', '50%'], []);

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={1}
				snapPoints={snapPoints}
				handleComponent={null}
				backgroundComponent={ModalBottomSheetBackground}
				backdropComponent={ModalBottomSheetBackdrop}
				backgroundStyle={{
					backgroundColor: Colors.BackgroundColor,
				}}
			>
				{props.children}
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

export default ModalBottomSheet;
