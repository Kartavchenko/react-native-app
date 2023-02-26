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
import { useState, useContext } from "react";
import { style } from "./registrationStyleSheet";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
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
            <Text style={style.textTitle}>Registration</Text>
            <TextInput
              value={stateForm.login}
              onChangeText={(value) => {
                setStateForm((prevState) => ({ ...prevState, login: value }));
              }}
              onFocus={() => {
                setKeyboardPadd(true);
              }}
              textAlign="center"
              placeholder="Login"
              style={style.input}
            />
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
              style={style.registationBtn}
              onPress={() => {
                navigation.navigate("Home");
                submit();
              }}
              activeOpacity={0.7}
            >
              <Text>Registration</Text>
            </TouchableOpacity>
            <View style={style.textLogin}>
              <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={style.textNavigation}>
                  Have an account? Go to Login
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
