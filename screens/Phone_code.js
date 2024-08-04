import * as React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ForgotPasswordPagePhone = () => {
  const handleVerifyCodePress = () => {
    // Handle the verify code button press event
    console.log("Verify Code button pressed");
  };

  const handleResendCodePress = () => {
    // Handle the resend code link press event
    console.log("Resend Code link pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.bottomImage}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Text style={styles.heading}>Code was sent to your Phone Number</Text>
      <Text style={styles.subheading}>
        The code expires in 5 minutes
      </Text>
      <TextInput
        style={styles.codeInput}
        placeholder="Enter Code"
      />
      <Pressable style={styles.verifyButton} onPress={handleVerifyCodePress}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </Pressable>
      <Pressable onPress={handleResendCodePress}>
        <Text style={styles.resendLink}>Resend Code</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorSteelblue_100,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflow: "hidden",
  },
  topImage: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 266,
    height: 273,
  },
  bottomImage: {
    position: "absolute",
    bottom: -100,
    right: -75,
    width: 272,
    height: 290,
  },
  heading: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    marginBottom: 10,
    textAlign: "center",
    zIndex: 1, // Ensures text is above the images
  },
  subheading: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
    opacity: 0.7,
    marginBottom: 20,
    textAlign: "center",
    zIndex: 1,
  },
  codeInput: {
    height: 52,
    width: 268,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_66xl,
    backgroundColor: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    marginBottom: 20,
    zIndex: 1,
  },
  verifyButton: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_66xl,
    width: 191,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -13, height: 4 },
    shadowOpacity: 1,
    marginBottom: 20,
    zIndex: 1,
  },
  verifyButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorSteelblue_100,
  },
  resendLink: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
    textDecorationLine: "underline",
    zIndex: 1,
  },
});

export default ForgotPasswordPagePhone;
