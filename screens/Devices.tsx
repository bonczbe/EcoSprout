import { Button, FlatList, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

type Props = {
  route: RouteProp<{ params: { name: string } }, "params">;
};

function Devices({ route }: Props) {
  const navigation = useNavigation();
  const { name } = route.params;
    const { t } = useTranslation();

  const items = {
    Budapest: {
      Indoor: {
        places: [
          {
            name: "Office",
            plants: ["Spider Plant", "Philodendron"],
          },
        ],
      },
      Outdoor: {
        places: [
          {
            name: "Garden",
            plants: ["Rose", "Hibiscus", "Tulip"],
          },
          {
            name: "Backyard",
            plants: ["Oak Sapling", "Sunflower", "Daisy"],
          },
        ],
      },
    },
    New_York: {
      Indoor: {
        places: [
          {
            name: "Office",
            plants: ["Spider Plant", "Philodendron"],
          },
        ],
      },
      Outdoor: {
        places: [
          {
            name: "Garden",
            plants: ["Rose", "Hibiscus", "Tulip"],
          },
          {
            name: "Backyard",
            plants: ["Oak Sapling", "Sunflower", "Daisy"],
          },
        ],
      },
    },
  };

  const data = items[name].Outdoor;

  return (
    <View style={tw`items-center h-full pt-1 bg-green-100`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>{t("COMMON.HOME")}</Text>
        </Pressable>
        <Text style={tw`text-xl font-bold text-green-800`}>
          {name.replace("_", " ")}
        </Text>
        <View style={tw`w-20`} />
      </View>

      <FlatList
        style={tw`w-full`}
        data={data.places ?? data.rooms}
        keyExtractor={(item) => item.name}
        contentContainerStyle={tw`p-4`}
        renderItem={({ item }) => (
          <Pressable
            style={tw`p-4 mb-2 bg-white rounded-lg shadow-md`}
            onPress={() => {
              navigation.navigate("Device", {
                name: item.name.replace(" ", "_"),
              });
            }}
          >
            <Text style={tw`text-lg font-bold text-green-800`}>
              {item.name}
            </Text>
            <Text style={tw`text-green-600`}>
              {(item.plants ?? item.rooms).join(", ")}
            </Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={tw`text-center text-green-800`}>No items available</Text>
        }
      />
    </View>
  );
}

export default Devices;
