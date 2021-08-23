import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import TopAnime from "../components/TopAnime";
import UpcomingAnime from "../components/UpcomingAnime";
const ListScreen = () => {
  return (
    <SafeAreaView style={tw`p-3 flex flex-1`}>
      <ScrollView style={tw`flex-1`}>
        <TopAnime />
        <UpcomingAnime />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
