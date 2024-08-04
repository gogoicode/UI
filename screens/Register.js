import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RegistrationComponent = () => {
  const handleRegisterPress = () => {
    // Handle the register button press event
    console.log("Register button pressed");
  };

  const handleSignInPress = () => {
    // Handle the sign-in button press event
    console.log("Sign In button pressed");
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
        placeholder="Email"
        placeholderTextColor={Color.colorGray_500}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Color.colorGray_500}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={Color.colorGray_500}
        secureTextEntry
      />
      <Pressable style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>
      <Pressable onPress={handleSignInPress}>
        <Text style={styles.signInLink}>Already have an account? Sign In</Text>
      </Pressable>
    </View>
  );
};

const RegisterPage = () => {
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
      <Text style={styles.title}>Register</Text>
      <RegistrationComponent />
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
  registerButton: {
    width: "90%",
    height: 50,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_66xl,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  registerButtonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorSteelblue_100,
  },
  signInLink: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.polyRegular,
    color: Color.colorWhite,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export default RegisterPage;
