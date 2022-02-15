import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import type {Routes} from './src/Routes'
import { Examples } from './src/Examples'
import { LoadAssets } from './src/components';

const Stack = createStackNavigator<Routes>();

const App = () => {
  return (
    <LoadAssets assets={[]}>
      <Stack.Navigator>
        <Stack.Screen name="Examples" component={Examples} options={{
          title: 'Learn Reanimated',
        }} />
      </Stack.Navigator>
    </LoadAssets>
  );
}

export default App;