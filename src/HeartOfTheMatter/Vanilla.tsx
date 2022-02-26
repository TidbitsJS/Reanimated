import { Animated, PanResponder, StyleSheet, View } from "react-native";
import { StyleGuide } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: StyleGuide.palette.primary,
  },
});

export const VanillaAnimated = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      position.setOffset({
        // @ts-ignore
        x: position.x._value,
        // @ts-ignore
        y: position.y._value,
      });
      position.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: position.x, dy: position.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      position.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, position.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};
