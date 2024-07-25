import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignUpFormContainer = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Text style={styles.signUpWith}>Sign up with</Text>
        <View style={styles.frame2}>
          <Image
            style={[styles.googleSymbolsvgIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/google-symbolsvg.png")}
          />
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/g12.png")}
          />
        </View>
      </View>
      <View style={[styles.frame3, styles.frameLayout]}>
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
  },
  frameLayout: {
    width: 293,
    overflow: "hidden",
  },
  signUpWith: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.plusJakartaSansRegular,
    color: Color.colorWhite,
    textAlign: "center",
    height: 38,
    width: 136,
  },
  googleSymbolsvgIcon: {
    overflow: "hidden",
  },
  frame2: {
    width: 54,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  frame1: {
    width: 136,
    overflow: "hidden",
  },
  frameIcon: {
    height: 337,
  },
  frame3: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 376,
  },
  frame: {
    position: "absolute",
    top: 504,
    left: 94,
    width: 358,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    height: 376,
  },
});

export default SignUpFormContainer;
