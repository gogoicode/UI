import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Frame2 from "../components/Frame2";
import SignUpFormContainer from "../components/SignUpFormContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AndroidLarge4 = () => {
  return (
    <View style={styles.androidLarge2}>
      <Frame2 />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-111.png")}
          />
          <Text style={styles.register}>Register</Text>
        </View>
      </View>
      <SignUpFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "relative",
    width: 266,
    height: 273,
  },
  register: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 216,
    height: 68,
    marginLeft: 158,
    marginTop: -26,
  },
  frame1: {
    width: 374,
    height: 315,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 446,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  androidLarge2: {
    position: "relative",
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
