import { Button, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { HomeScreenNavigationProp } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

type Props = {};

function Home({}: Props) {
  const navigation = useNavigation();
  const items = {
    places: [
      {
        name: "Budapest",
        rooms: ["Garden", "Patio", "Swimming Pool", "Gazebo", "Front Yard"],
      },
      {
        name: "New York",
        rooms: ["Backyard", "Terrace", "Balcony", "Driveway", "Flower Garden"],
      },
    ],
  };
  return (
    <View style={tw`items-center h-full pt-24 bg-green-100`}>
      <Text style={tw`mb-2 text-lg font-semibold text-gray-700`}>
        Choose Your Area
      </Text>
      {items.places.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={tw`px-6 py-4 mb-3 bg-green-100 rounded-lg`}
          onPress={() =>
            navigation.navigate("Devices", {
              name: item.name.replace(" ", "_"),
            })
          }
        >
          <Text style={tw`text-lg font-medium text-green-800`}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        key={"Stats"}
        style={tw`px-6 py-4 mb-3 bg-green-100 rounded-lg`}
        onPress={() => navigation.navigate("Stats")}
      >
        <Text style={tw`text-lg font-medium text-green-800`}>Stats</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
