import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Frame1 from "../components/Frame1";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  return (
    <View style={styles.androidLarge5}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-111.png")}
          />
          <View style={styles.frame2}>
            <Text style={styles.enterYourPhone}>Enter your Phone number</Text>
            <Text style={styles.enterYourPhone1}>{`Enter your Phone Number
 to receive the OTP Code`}</Text>
          </View>
        </View>
        <TextInput
          style={styles.frame3}
          placeholder="Enter Phone Number"
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.frame4}>
        <Frame1 />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame2.png")}
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
  enterYourPhone: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 288,
    height: 68,
    marginLeft: 124,
  },
  enterYourPhone1: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGainsboro_200,
    textAlign: "center",
    width: 253,
    height: 48,
    marginLeft: 142,
    marginTop: -34,
  },
  frame2: {
    width: 412,
    height: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame1: {
    width: 412,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame3: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowRadius: 13,
    elevation: 13,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    width: 300,
    height: 47,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 0,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    marginLeft: 118,
    marginTop: 31,
  },
  frame: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 418,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "relative",
    width: 538,
    height: 290,
    overflow: "hidden",
    marginTop: 12,
  },
  frame4: {
    position: "absolute",
    top: 420,
    left: -86,
    width: 538,
    height: 460,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  androidLarge5: {
    position: "relative",
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge2;
