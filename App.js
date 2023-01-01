import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen/Home';
import React, { useEffect } from 'react';
import Main from './navigation/main';
import { Provider as PaperProvider, DefaultTheme, } from 'react-native-paper';
import * as Sentry from 'sentry-expo';

// Sentry.init({
//   dsn: 'YOUR DSN HERE',
//   enableInExpoDevelopment: true,
//   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
// });

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#3498db',
		accent: '#f1c40f',
	},



};



export default function App() {

	return (
		<PaperProvider theme={theme}>
			<Main />
			<StatusBar style='auto' />
		</PaperProvider>
	);
}
