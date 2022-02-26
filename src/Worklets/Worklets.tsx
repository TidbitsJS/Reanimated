import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import type Animated from "react-native-reanimated";
import { useSharedValue, runOnUI, runOnJS } from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { Button } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

const formatDatetime = (datetime: Date) => {
  "worklet";
  return `${datetime.getFullYear()}-${
    datetime.getMonth() + 1
  }-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};

const sayHello = (
  text: Animated.SharedValue<string>,
  from: string,
  cb: () => void
) => {
  "worklet";
  text.value = `Hello from ${from}(${Platform.OS}) at ${formatDatetime(
    new Date()
  )}`;
  runOnJS(cb)();
};

export const Worklets = () => {
  const [jsText, setJsText] = useState("");
  const text = useSharedValue("");
  const sayHelloOnTheJsThread = () =>
    setJsText(`Hello world at ${formatDatetime(new Date())}`);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Js thread says:</Text>
      <Text>{jsText}</Text>

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>UI thread says:</Text>
      <ReText {...{ text }} />
      <Button
        onPress={() =>
          runOnUI(sayHello)(
            text,
            "Beautiful Zuerich Switzerland",
            sayHelloOnTheJsThread
          )
        }
        label="Say Hello"
        primary
      />
    </View>
  );
};
