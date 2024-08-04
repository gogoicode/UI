import * as React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PasswordResetPage = () => {
  const handleGetResetLinkPress = () => {
    console.log("Get Reset Link pressed");
  };

  const handleVerifyCodePress = () => {
    console.log("Verify Code pressed");
  };

  const handleResendCodePress = () => {
    console.log("Resend Code pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImageTop}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.backgroundImageBottom}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Email Address"
          placeholderTextColor={Color.colorBlack}
        />
        <Pressable style={styles.actionButton} onPress={handleGetResetLinkPress}>
          <Text style={styles.buttonText}>Get Reset Link</Text>
        </Pressable>
      </View>
      <View style={styles.codeSection}>
        <Text style={styles.codeMessage}>The code was sent to your Email</Text>
        <Text style={styles.codeExpiry}>
          The code expires in <Text style={styles.expiryTime}>5 minutes</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.actionButton} onPress={handleVerifyCodePress}>
          <Text style={styles.buttonText}>Verify Code</Text>
        </Pressable>
        <Pressable style={styles.resendButton} onPress={handleResendCodePress}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  backgroundImageTop: {
    position: "absolute",
    top: -55,
    left: -86,
    width: 266,
    height: 273,
  },
  backgroundImageBottom: {
    position: "absolute",
    bottom: -100,
    right: -75,
    width: 272,
    height: 290,
  },
  title: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.colorWhite,
    marginBottom: 30,
  },
  formContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  inputField: {
    width: "100%",
    height: 52,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowOpacity: 1,
    elevation: 13,
  },
  actionButton: {
    width: "100%",
    height: 52,
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowOpacity: 1,
    elevation: 13,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorWhite,
  },
  codeSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  codeMessage: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "center",
    marginBottom: 5,
  },
  codeExpiry: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
  },
  expiryTime: {
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  resendButton: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    height: 52,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -13,
      height: 4,
    },
    shadowOpacity: 1,
    elevation: 13,
  },
  resendButtonText: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.playBold,
    color: Color.colorSteelblue_100,
  },
});

export default PasswordResetPage;
