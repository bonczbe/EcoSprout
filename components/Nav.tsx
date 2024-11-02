import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

interface NavProps {
  name: string;
}

const Nav: React.FC<NavProps> = ({ name }) => {
  return (
    <SafeAreaView style={tw`p-4 pt-12 bg-green-200`}>
      <View style={tw`flex-row items-center`}>
        <View style={tw`flex-initial w-10`} />
        <Text
          style={tw`flex-initial text-xl font-bold tracking-wide text-center text-black w-80`}
        >
          {name}
        </Text>
        <View style={tw`items-end flex-initial w-10`}>
          <Ionicons name="person-outline" size={30} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Nav;
