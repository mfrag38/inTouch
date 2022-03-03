import React from 'react';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';
import App from './src';
import { name as appName } from './app.json';

const Wrapper = () => (
	<PortalProvider>
		<GestureHandlerRootView>
			<App />
		</GestureHandlerRootView>
	</PortalProvider>
);

AppRegistry.registerComponent(appName, () => Wrapper);
