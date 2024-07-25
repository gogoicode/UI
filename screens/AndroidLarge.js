import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import GroupComponent from "../components/GroupComponent";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const AndroidLarge = () => {
  return (
    <View style={styles.androidLarge1}>
      <Image
        style={styles.androidLarge1Child}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.androidLarge1Item}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Text style={styles.login}>Login</Text>
      <Text style={[styles.forgotPassword, styles.registerTypo]}>
        Forgot Password?
      </Text>
      <GroupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  registerTypo: {
    fontFamily: FontFamily.polyRegular,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 48,
    width: 191,
    shadowOpacity: 1,
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  androidLarge1Child: {
    top: -55,
    left: -86,
    width: 266,
    height: 273,
    position: "absolute",
  },
  androidLarge1Item: {
    top: 590,
    left: 180,
    width: 272,
    height: 290,
    position: "absolute",
  },
  login: {
    top: 192,
    left: 72,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 216,
    height: 68,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  forgotPassword: {
    top: 423,
    left: 191,
    fontSize: FontSize.size_base,
    width: 182,
    height: 40,
  },
  androidLarge1: {
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge;
