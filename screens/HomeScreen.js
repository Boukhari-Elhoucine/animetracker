import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "./ListScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
const HomeScreen = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#185ADB" },
        headerTintColor: "#fff",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="List"
        component={ListScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#185ADB" : "#555"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="search1"
                size={24}
                color={focused ? "#185ADB" : "#555"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="user"
                size={24}
                color={focused ? "#185ADB" : "#555"}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
