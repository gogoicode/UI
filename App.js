const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import GroupComponent from "./components/GroupComponent";
import PasswordResetPage from "./screens/Forgot_pass";
import ForgotPasswordPageEmail from "./screens/Email_code";
import RegistrationComponent from "./screens/Register";
import ForgotPasswordPagePhone from './screens/Phone_code';
import SignUpFormContainer from "./components/SignUpFormContainer"; 
//import Size48Icon from "./components/Size48Icon";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poly-Regular": require("./assets/fonts/Poly-Regular.ttf"),
    "Play-Regular": require("./assets/fonts/Play-Regular.ttf"),
    "Play-Bold": require("./assets/fonts/Play-Bold.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge"
              component={PasswordResetPage} // remane the componentes to retive the pages
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
