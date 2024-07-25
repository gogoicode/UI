import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Frame from "../components/Frame";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge3}>
      <Frame />
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.codeWasSend}>code was send to you Email</Text>
          <Text style={styles.theCodeExpiresContainer}>
            <Text style={styles.theCodeExpires}>The code expires in</Text>
            <Text style={styles.minutes}> 5 minutes</Text>
          </Text>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <Pressable style={styles.frame4}>
              <Text style={styles.verifyCode}>Verify Code</Text>
            </Pressable>
          </View>
          <Pressable style={styles.frame5}>
            <Text style={styles.verifyCode}>Resend Code</Text>
          </Pressable>
          <View style={styles.frame6}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-131.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeWasSend: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.playRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 293,
    height: 25,
    marginLeft: 123,
  },
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
    marginLeft: 132,
    marginTop: 20,
  },
  frame1: {
    width: 416,
    height: 73,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  verifyCode: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame4: {
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
  },
  frame3: {
    width: 369,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame5: {
    width: 330,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 17,
  },
  frameChild: {
    position: "relative",
    width: 272,
    height: 290,
  },
  frame6: {
    width: 538,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 17,
  },
  frame2: {
    width: 538,
    height: 390,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 51,
  },
  frame: {
    position: "absolute",
    top: 366,
    left: -86,
    width: 538,
    height: 514,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  androidLarge3: {
    position: "relative",
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
