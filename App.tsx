import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import type { Routes } from "./src/Routes";
import { Examples } from "./src/Examples";
import { LoadAssets } from "./src/components";
import { VanillaHeart } from "./src/HeartOfTheMatter";
import { Worklets } from "./src/Worklets";
import { Transitions } from "./src/Transitions";

const Stack = createStackNavigator<Routes>();

const App = () => {
  return (
    <LoadAssets assets={[]}>
      <Stack.Navigator>
        <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: "Learn Reanimated",
          }}
        />
        <Stack.Screen
          name="TheHeartOfTheMatter"
          component={VanillaHeart}
          options={{
            title: "The Heart of the Matter",
          }}
        />
        <Stack.Screen
          name="Worklets"
          component={Worklets}
          options={{
            title: "Worklets",
          }}
        />
        <Stack.Screen
          name="Transitions"
          component={Transitions}
          options={{
            title: "Transitions",
          }}
        />
      </Stack.Navigator>
    </LoadAssets>
  );
};

export default App;
