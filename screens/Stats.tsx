import { Button, Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: RoomsScreenNavigationProp;
};

function Stats({ navigation }: Props) {
  return (
    <View style={tw`items-center h-full pt-1 bg-green-100 w-full`}>
      <View style={tw`flex-row items-center justify-between w-full pb-2`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`font-bold text-white`}>Back</Text>
        </Pressable>
        <Text style={tw`text-xl font-bold text-green-800`}>
          kek
        </Text>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 mr-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>Home</Text>
        </Pressable>
      </View>
      <ScrollView style={tw`w-full px-4`}>
        <Text style={tw`text-xl font-bold text-green-800`}>
          kek
        </Text></ScrollView>
    </View>
  );
}

export default Stats;
