import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { style } from "./loginStyleSheet";

const initialValue = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [stateForm, setStateForm] = useState(initialValue);
  const [keyboardPadd, setKeyboardPadd] = useState(false);

  const submit = () => {
    setKeyboardPadd(false);
    Keyboard.dismiss();
    console.log(stateForm);
    setStateForm(initialValue);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.backdrop}>
        <View
          style={{ ...style.container, marginBottom: keyboardPadd ? 20 : 0 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={style.textTitle}>Login</Text>
            <TextInput
              value={stateForm.email}
              onChangeText={(value) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  email: value,
                }));
              }}
              onFocus={() => {
                setKeyboardPadd(true);
              }}
              textAlign="center"
              placeholder="Email"
              style={style.input}
            />
            <TextInput
              value={stateForm.password}
              onChangeText={(value) => {
                setStateForm((prevState) => ({
                  ...prevState,
                  password: value,
                }));
              }}
              onFocus={() => {
                setKeyboardPadd(true);
              }}
              textAlign="center"
              secureTextEntry
              placeholder="Password"
              style={style.input}
            />
            <TouchableOpacity
              style={style.loginBtn}
              onPress={() => {
                navigation.navigate("Home");
                submit();
              }}
              activeOpacity={0.7}
            >
              <Text>Login In</Text>
            </TouchableOpacity>
            <View style={style.textLogin}>
              <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={style.textNavigation}>
                  Have not an account? Go to Register
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
