import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-111.png")}
        />
        <View style={styles.frame2}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Text style={styles.dontWorryAbout}>
            don’t worry about your account
          </Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Image
          style={styles.frameIcon2}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <TextInput
          style={styles.frame4}
          placeholder="5"
          keyboardType="numeric"
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "relative",
    width: 266,
    height: 273,
  },
  forgotPassword: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 271,
    height: 68,
    marginLeft: 132,
  },
  dontWorryAbout: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    width: 311,
    height: 23,
    marginLeft: -403,
  },
  frame2: {
    width: 425,
    height: 68,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: Padding.p_3xl,
  },
  frame1: {
    width: 425,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  frameIcon1: {
    position: "absolute",
    top: 0,
    left: 65,
    borderRadius: Border.br_5xs,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  frameIcon2: {
    position: "absolute",
    top: 0,
    left: 127,
    borderRadius: Border.br_5xs,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  frame4: {
    position: "absolute",
    top: 0,
    left: 192,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    width: 50,
    height: 50,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.poetsenOne,
    fontSize: FontSize.size_6xl,
  },
  frame3: {
    width: 242,
    height: 50,
    overflow: "hidden",
    marginLeft: 146,
    marginTop: 10,
  },
  frame: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 416,
    height: 405,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Frame;
