import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Books from "./src/components/Books";

import { configureStore } from './src/store';

const { store, persistor } = configureStore();

export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
            <Text>Esta pantalla</Text>
          <Books/>
        </View>
      </Provider>
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
