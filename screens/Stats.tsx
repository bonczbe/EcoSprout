import { Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";

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

  return (
    <View style={tw`items-center h-full pt-2 bg-green-50 w-full`}>
      <View style={tw`flex-row items-center justify-between w-full pb-3 px-4`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-700 rounded-lg shadow-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`font-bold text-white`}>Back</Text>
        </Pressable>
        <Text style={tw`text-2xl font-extrabold text-green-900`}>Stats</Text>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 mr-1 bg-green-700 rounded-lg shadow-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>Home</Text>
        </Pressable>
      </View>

      <ScrollView style={tw`w-full px-4`}>
        {Object.entries(items).map(([location, data]) => (
          <View key={location} style={tw`mb-6`}>
            <Text style={tw`text-2xl font-bold text-green-800 mb-2`}>
              {location} ({data.weather})
            </Text>

            <Text style={tw`text-xl font-semibold text-green-600 mb-2`}>Indoor Stats</Text>
            {data.Indoor.places.map((place, index) => (
              <View key={index} style={tw`mb-4 bg-green-100 rounded-lg p-4 shadow-lg`}>
                <Text style={tw`text-lg font-semibold text-green-700`}>{place.name}</Text>
                <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-sm text-green-600`}>Usage: {place.usage}L</Text>
                  <Text style={tw`text-sm text-green-600`}>Remaining: {place.remaining}L</Text>
                </View>
                <View style={tw`mt-2`}>
                  {Object.entries(place.plants).map(([plant, plantData]) => (
                    <Text key={plant} style={tw`text-sm text-green-500 pl-2`}>
                      {plant.replace("_", " ")}: {plantData.usage}L
                    </Text>
                  ))}
                </View>

                <View style={tw`mt-4 bg-green-200 rounded-full h-2`}>
                  <View
                    style={[
                      tw`h-full rounded-full`,
                      {
                        width: `${(place.usage / (place.usage + place.remaining)) * 100}%`,
                        backgroundColor: "#2D6A4F",
                      },
                    ]}
                  />
                </View>
              </View>
            ))}

            <Text style={tw`text-xl font-semibold text-green-600 mb-2 mt-4`}>Outdoor Stats</Text>
            {data.Outdoor.places.map((place, index) => (
              <View key={index} style={tw`mb-4 bg-green-100 rounded-lg p-4 shadow-lg`}>
                <Text style={tw`text-lg font-semibold text-green-700`}>{place.name}</Text>
                <Text style={tw`text-sm text-green-600`}>Plants:</Text>
                {Object.entries(place.plants).map(([plant, plantData]) => (
                  <Text key={plant} style={tw`text-sm text-green-500 pl-2`}>
                    {plant.replace("_", " ")}: {plantData.usage}L
                  </Text>
                ))}

                <View style={tw`mt-4 bg-green-200 rounded-full h-2`}>
                  <View
                    style={[
                      tw`h-full rounded-full`,
                      {
                        width: `${(place.usage / (place.usage + place.remaining)) * 100}%`,
                        backgroundColor: "#2D6A4F",
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Stats;
