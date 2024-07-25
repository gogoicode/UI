import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent = ({ style }) => {
  return (
    <View style={[styles.rectangleParent, style, styles.groupChildShadowBox]}>
      <Pressable style={[styles.groupChild, styles.groupChildShadowBox]} />
      <Text style={styles.register}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    height: 48,
    width: 191,
    shadowOpacity: 1,
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChild: {
    top: 0,
    left: 0,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue_200,
    position: "absolute",
  },
  register: {
    top: 10,
    left: 52,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    shadowRadius: 13,
    elevation: 13,
  },
});

export default GroupComponent;
