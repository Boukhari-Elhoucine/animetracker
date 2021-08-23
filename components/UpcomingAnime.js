import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import Card from "../components/Card";
import { Text } from "react-native-elements";
const UpcomingAnime = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const data = await fetch(
        "https://api.jikan.moe/v3/top/anime/1/upcoming"
      ).then((res) => res.json());
      setList(data.top.slice(0, 15));
    }
    fetchList();
  }, []);
  return (
    <View>
      <Text style={tw`mb-1 text-gray-700`} h4>
        {" "}
        Up coming
      </Text>
      <FlatList
        data={list}
        initialNumToRender={3}
        horizontal
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.mal_id.toString()}
      />
    </View>
  );
};

export default UpcomingAnime;
