import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.theCodeExpiresContainer}>
        <Text style={styles.theCodeExpires}>The code expires in</Text>
        <Text style={styles.minutes}> 5 minutes</Text>
      </Text>
      <View style={styles.frame1}>
        <Pressable style={styles.frame2}>
          <Text style={styles.verifyCode}>Verify Code</Text>
        </Pressable>
        <Text style={styles.resendCode}>Resend Code</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  theCodeExpires: {
    fontFamily: FontFamily.playRegular,
  },
  minutes: {
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
  },
  theCodeExpiresContainer: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
    width: 275,
    height: 28,
    marginLeft: 137,
  },
  verifyCode: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowRadius: 13,
    elevation: 13,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSteelblue_200,
    width: 200,
    height: 43,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_5xs,
    marginLeft: 169,
  },
  resendCode: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorWhite,
    textAlign: "center",
    height: 23,
    marginLeft: 208,
    marginTop: 17,
  },
  frame1: {
    width: 369,
    height: 83,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 47,
  },
  frame: {
    width: 412,
    height: 158,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Frame1;
