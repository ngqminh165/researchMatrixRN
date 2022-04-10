import 'node-libs-expo/globals';
import '@rn-matrix/expo/shim.js';

import {polyfillGlobal} from 'react-native/Libraries/Utilities/PolyfillFunctions';
polyfillGlobal('URL', () => require('whatwg-url').URL);
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { matrix } from '@rn-matrix/expo';

const BASE_URL = 'https://matrix.pdxinfosec.org';
const PASSWORD = '66CeWrVm';
const USERNAME = '@test008:pdxinfosec.org';
const ROOM_ID = '!RNeodVfHGpDgUnjvYy:pdxinfosec.org';

const login = async () => {
  const result = await matrix.loginWithPassword(
    USERNAME,
    PASSWORD,
    BASE_URL,
    true, // enable crypto? default false
  );
  console.log(result)
  if (result.error) {
    console.log('Error logging in: ', result);
  }


};

login()

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
