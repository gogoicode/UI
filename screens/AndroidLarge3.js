import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AndroidLarge3 = () => {
  return (
    <View style={styles.androidLarge4}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-111.png")}
          />
          <View style={styles.frame2}>
            <Text style={styles.enterYourEmail}>Enter your Email</Text>
            <Text
              style={styles.enterEmailAddress}
            >{`Enter Email Address to get link
 to reset your password`}</Text>
          </View>
        </View>
        <TextInput
          style={styles.frame3}
          placeholder="Enter Email Address"
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.frame4}>
        <View style={styles.frame5}>
          <Text style={styles.theCodeWas}>The code was send to your Email</Text>
          <Text style={styles.theCodeExpiresContainer}>
            <Text style={styles.theCodeExpires}>The code expires in</Text>
            <Text style={styles.minutes}> 5 minutes</Text>
          </Text>
        </View>
        <View style={styles.frame6}>
          <Pressable style={styles.frame7}>
            <Pressable style={styles.frame8}>
              <Text style={styles.verifyCode}>Verify Code</Text>
            </Pressable>
          </Pressable>
          <View style={styles.frame9}>
            <View style={styles.frame10}>
              <Text style={styles.verifyCode}>Resend Code</Text>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
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
  enterYourEmail: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 216,
    height: 68,
    marginLeft: 164,
  },
  enterEmailAddress: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGainsboro_200,
    textAlign: "center",
    height: 48,
    marginLeft: 148,
    marginTop: -29,
  },
  frame2: {
    width: 396,
    height: 87,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -9,
  },
  frame1: {
    width: 396,
    height: 351,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 136,
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
    paddingHorizontal: 59,
    paddingVertical: 0,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    marginTop: 30,
  },
  frame: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 532,
    height: 428,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  theCodeWas: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 344,
    height: 40,
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
    marginLeft: 40,
  },
  frame5: {
    width: 344,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  verifyCode: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame8: {
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
  frame7: {
    width: 212,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon: {
    position: "relative",
    width: 327,
    height: 290,
    overflow: "hidden",
  },
  frame10: {
    width: 327,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame9: {
    width: 545,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 17,
  },
  frame6: {
    width: 545,
    height: 373,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 29,
  },
  frame4: {
    position: "absolute",
    top: 410,
    left: -92,
    width: 545,
    height: 470,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  androidLarge4: {
    position: "relative",
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge3;
