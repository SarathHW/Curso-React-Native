/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native'; 
import CoinsStack  from 'cryptoTraker/src/components/Coins/CoinsStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack/>
    </NavigationContainer>
  );
};



export default App;
