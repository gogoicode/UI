import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const GroupComponent = () => {
  const handleLoginPress = () => {
    // Handle the login button press event
    console.log("Login button pressed");
  };

  const handleRegisterPress = () => {
    // Handle the register button press event
    console.log("Register button pressed");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={Color.colorGray_500}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Color.colorGray_500}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>
    </View>
  );
};

const Login = () => {
  const handleForgotPasswordPress = () => {
    // Navigate to the forgot password page or perform any other action
    console.log("Forgot Password link pressed");
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
      <Text style={styles.title}>Login</Text>
      <GroupComponent />
      <Pressable onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorSteelblue_100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflow: "hidden",
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
    color: Color.colorWhite,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: Border.br_66xl,
    borderWidth: 1,
    borderColor: Color.colorGray_200,
    backgroundColor: Color.colorGray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorBlack,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_66xl,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorSteelblue_100,
  },
  registerButton: {
    width: "90%",
    height: 50,
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_66xl,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorWhite,
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  registerButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
  },
  forgotPassword: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
    textDecorationLine: "underline",
  },
});

export default Login;
