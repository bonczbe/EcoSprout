import { Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";
import { useTranslation } from "react-i18next";
import PlacesStats from "../components/Stats/PlacesStats";

type Props = {
  navigation: RoomsScreenNavigationProp;
};

function Stats({ navigation }: Props) {
  const items = {
    Budapest: {
      weather: "Sunny",
      Indoor: {
        places: [
          {
            name: "Office",
            plants: {
              Spider_Plant: {
                usage: 15,
              },
              Philodendron: {
                usage: 10,
              },
            },
            usage: 25,
            remaining: 150,
          },
          {
            name: "Elevator",
            plants: {
              Spider_Plant: {
                usage: 15,
              },
              Philodendron: {
                usage: 10,
              },
            },
            usage: 25,
            remaining: 150,
          },
        ],
      },
      Outdoor: {
        places: [
          {
            name: "Garden",
            plants: {
              Rose: {
                usage: 100,
              },
              Hibiscus: {
                usage: 50,
              },
              Tulip: {
                usage: 30,
              },
            },
            usage: 180,
            remaining: 350,
          },
        ],
      },
    },
    Bagod: {
      weather: "Rainy",
      Indoor: {
        places: [
          {
            name: "Library",
            plants: {
              Rubber_Plant: {
                usage: 5,
              },
              Fiddle_Leaf_Fig: {
                usage: 7,
              },
            },
            usage: 12,
            remaining: 60,
          },
        ],
      },
      Outdoor: {
        places: [
          {
            name: "Front Yard",
            plants: {
              Lavender: {
                usage: 20,
              },
              Jasmine: {
                usage: 15,
              },
              Marigold: {
                usage: 10,
              },
            },
            usage: 45,
            remaining: 100,
          },
          {
            name: "Courtyard",
            plants: {
              Palm: {
                usage: 30,
              },
              Fern: {
                usage: 25,
              },
              Aloe_Vera: {
                usage: 10,
              },
            },
            usage: 65,
            remaining: 120,
          },
        ],
      },
    },
  };
  
    const { t } = useTranslation();

  return (
    <View style={tw`items-center h-full pt-2 bg-green-50 w-full`}>
      <View style={tw`flex-row items-center justify-between w-full pb-3 px-4`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-700 rounded-lg shadow-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`font-bold text-white`}>{t("COMMON.BACK")}</Text>
        </Pressable>
        <Text style={tw`text-2xl font-extrabold text-green-900`}>{t("STATSSCREEN.TITLE")}</Text>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 mr-1 bg-green-700 rounded-lg shadow-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>{t("COMMON.HOME")}</Text>
        </Pressable>
      </View>

      <ScrollView style={tw`w-full px-4`}>
        {Object.entries(items).map(([location, data]) => (
          <View key={location} style={tw`mb-6`}>
            <Text style={tw`text-2xl font-bold text-green-800 mb-2`}>
              {location} ({data.weather})
            </Text>
            <PlacesStats title={t("STATSSCREEN.INDOOR")} places={data.Indoor.places} navigation={navigation} location={location}/>
            <PlacesStats title={t("STATSSCREEN.OUTDOOR")} places={data.Outdoor.places} navigation={navigation}  location={location}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Stats;
