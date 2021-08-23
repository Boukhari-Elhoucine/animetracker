import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const Card = ({ item }) => {
  return (
    <View style={[{ maxWidth: 120 }, tw`py-2`]}>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={{ uri: item.image_url }}
          style={tw`h-40 w-32 `}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={tw`text-xs text-center`}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
