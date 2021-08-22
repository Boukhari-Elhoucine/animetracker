import React from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import tw from "tailwind-react-native-classnames";
import { auth } from "../firebase";

const RegisterScreen = () => {
  const signUp = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: data.fullname,
        });
      })
      .catch((err) => alert(err.message));
  };
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ mode: "onBlur" });
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={tw`flex flex-1 items-center bg-white p-4 justify-center`}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`w-full  flex-1 justify-center`}>
          <Text h2 style={tw`text-3xl text-blue-500 mb-5 ml-2`}>
            {" "}
            Join Us
          </Text>
          <Controller
            control={control}
            rules={{
              required: "field required",
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                placeholder="Full Name"
                onChangeText={onChange}
                style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
                onBlur={onBlur}
                placeholderTextColor="#39A2DB"
                value={value}
              />
            )}
            name="fullname"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{
              required: "please enter email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "please enter a valid email format",
              },
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                placeholder="Email"
                onChangeText={onChange}
                style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
                onBlur={onBlur}
                placeholderTextColor="#39A2DB"
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{
              required: "field required",
              minLength: {
                value: 6,
                message: "password sould be 6 characters long",
              },
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                placeholder="Password"
                onChangeText={onChange}
                style={tw`border border-gray-300 p-2 rounded-lg mb-2`}
                onBlur={onBlur}
                secureTextEntry
                value={value}
                placeholderTextColor="#39A2DB"
              />
            )}
            name="password"
            defaultValue=""
          />
          <TouchableHighlight
            disabled={!isValid || isSubmitting}
            style={tw` self-center rounded-md overflow-hidden`}
            onPress={handleSubmit(signUp)}
          >
            <Text
              style={tw`bg-blue-400 text-white px-14 py-2 ${
                !isValid && "bg-gray-300 text-gray-800"
              }`}
            >
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
