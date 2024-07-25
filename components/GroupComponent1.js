import * as React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <TextInput
        style={[styles.groupChild, styles.groupLayout]}
        placeholder="Password"
      />
      <TextInput
        style={[styles.groupItem, styles.usernamePosition]}
        placeholder="Username"
      />
      <Image
        style={styles.groupInner}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.usernameWrapper}>
        <Text style={[styles.username, styles.usernameTypo]}> Username</Text>
      </View>
      <Text style={[styles.username1, styles.usernameTypo]}> Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Image
        style={styles.arrowRightIcon}
        contentFit="cover"
        source={require("../assets/arrow-right.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 52,
    width: 268,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  usernamePosition: {
    top: 0,
    left: 0,
  },
  usernameTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.polyRegular,
    fontSize: FontSize.size_base,
    height: 30,
    width: 136,
    position: "absolute",
  },
  groupChild: {
    top: 52,
    borderBottomRightRadius: Border.br_66xl,
    left: 0,
  },
  groupItem: {
    borderTopRightRadius: Border.br_66xl,
    height: 52,
    width: 268,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  groupInner: {
    left: 243,
    width: 51,
    height: 48,
    top: 26,
    position: "absolute",
  },
  username: {
    top: 0,
    left: 0,
  },
  usernameWrapper: {
    height: 30,
    width: 136,
    left: 4,
    top: 26,
    position: "absolute",
  },
  username1: {
    left: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.polyRegular,
    fontSize: FontSize.size_base,
    top: 26,
  },
  password: {
    top: 74,
    left: 10,
  },
  arrowRightIcon: {
    top: 33,
    left: 256,
    width: 32,
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 305,
    width: 294,
    height: 104,
    left: 0,
    position: "absolute",
  },
});

export default GroupComponent;
