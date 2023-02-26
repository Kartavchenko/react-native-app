import LoginScreen from "./login/LoginScreen";
import RegistrationScreen from "./registration/RegistrationScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthRouting = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthRouting;
