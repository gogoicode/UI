import * as React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Size48Icon from "./Size48Icon";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.frame1}>
          <TextInput style={styles.frameChild} placeholder="Username" />
          <View style={styles.frame2}>
            <TextInput style={styles.frameItem} placeholder="Email Address" />
          </View>
        </View>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.frame5}>
              <TextInput style={styles.frameInner} placeholder="Password" />
            </View>
          </View>
          <View style={styles.frame6}>
            <View style={styles.frame7}>
              <View style={styles.frame8}>
                <Image
                  style={styles.userIcon}
                  contentFit="cover"
                  source={require("../assets/user.png")}
                />
                <Text style={styles.username}> Username</Text>
              </View>
              <View style={styles.frame9}>
                <View style={styles.frame10}>
                  <Image
                    style={styles.mailIcon}
                    contentFit="cover"
                    source={require("../assets/mail.png")}
                  />
                  <Image
                    style={styles.lockIcon}
                    contentFit="cover"
                    source={require("../assets/lock.png")}
                  />
                </View>
                <View style={styles.frame11}>
                  <Text style={styles.emailAddress}>Email Address</Text>
                  <Text style={styles.password}>Password</Text>
                </View>
              </View>
            </View>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-51.png")}
              />
              <Size48Icon
                size48IconSize48={require("../assets/check.png")}
                size48IconPosition="absolute"
                size48IconWidth={67}
                size48IconHeight={68}
                size48IconTop={7}
                size48IconLeft={4}
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
    borderTopRightRadius: Border.br_66xl,
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 316,
    height: 52,
  },
  frameItem: {
    position: "relative",
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 316,
    height: 52,
  },
  frame2: {
    width: 316,
    height: 104,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -52,
  },
  frame1: {
    width: 316,
    height: 104,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameInner: {
    position: "relative",
    borderBottomRightRadius: Border.br_66xl,
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 316,
    height: 52,
  },
  frame5: {
    width: 316,
    height: 156,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame4: {
    width: 316,
    height: 156,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  userIcon: {
    width: 40,
    height: 26,
    overflow: "hidden",
    marginTop: 14,
  },
  username: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 56,
    height: 30,
    marginTop: 26,
    marginLeft: -129,
  },
  frame8: {
    width: 136,
    height: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  mailIcon: {
    width: 88,
    height: 24,
    overflow: "hidden",
    marginTop: 64,
  },
  lockIcon: {
    width: 135,
    height: 24,
    overflow: "hidden",
    marginTop: -88,
  },
  frame10: {
    width: 26,
    height: 135,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: Padding.p_12xs,
  },
  emailAddress: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 98,
    height: 30,
    marginTop: 68,
  },
  password: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 135,
    marginTop: 116,
    marginLeft: -136,
  },
  frame11: {
    width: 160,
    height: 135,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: -23,
  },
  frame9: {
    width: 163,
    height: 135,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: Padding.p_118xl,
    marginLeft: -129,
  },
  frame7: {
    width: 170,
    height: 135,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 71,
    height: 68,
  },
  ellipseParent: {
    width: 122,
    height: 75,
    marginTop: 47,
    marginLeft: 99,
  },
  frame6: {
    width: 340,
    height: 135,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -312,
  },
  frame3: {
    width: 344,
    height: 156,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: Padding.p_9xl,
    marginLeft: -316,
  },
  frameParent: {
    width: 344,
    height: 156,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: Padding.p_9xl,
  },
  frame: {
    position: "absolute",
    top: 328,
    left: -86,
    width: 430,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame2;
