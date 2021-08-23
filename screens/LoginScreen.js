import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  Text,
  View,
  Animated,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../firebase";
const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsub;
  }, [navigation]);
  const buttonAnimation = useState(new Animated.Value(0))[0];
  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm({ mode: "onBlur" });
  const Login = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((err) => alert(err));
  };
  useLayoutEffect(() => {
    Animated.spring(buttonAnimation, {
      toValue: 1,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }, []);
  return (
    <KeyboardAvoidingView
      style={tw`flex items-center bg-white justify-center flex-1 p-4`}
    >
      <StatusBar barStyle="auto" />
      <Text style={tw` self-start text-2xl text-blue-500 ml-2 mb-5`}>
        Login
      </Text>
      <View style={tw`w-full h-32 flex justify-around`}>
        <Controller
          control={control}
          rules={{ required: "please enter email" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={tw`border border-gray-300 p-2 rounded-lg `}
              placeholderTextColor="#39A2DB"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={tw`text-red-400 mb-1`}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={tw`border border-gray-300 p-2 rounded-lg `}
              placeholderTextColor="#39A2DB"
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={tw`text-red-400 mb-1`}>{errors.password.message}</Text>
        )}
      </View>
      <TouchableHighlight
        disabled={!isValid || isSubmitting}
        onPress={handleSubmit(Login)}
        style={tw`rounded-md overflow-hidden`}
      >
        <Animated.View style={{ transform: [{ scale: buttonAnimation }] }}>
          <Text
            style={tw` px-16 py-2 text-white bg-blue-400 ${
              !isValid && ` text-gray-700 bg-gray-300`
            }`}
          >
            Login
          </Text>
        </Animated.View>
      </TouchableHighlight>
      <TouchableOpacity
        style={tw`px-14 py-2 border border-blue-400 rounded-md mt-2`}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
