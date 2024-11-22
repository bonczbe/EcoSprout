import { Image, Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { RouteProp, useNavigation } from "@react-navigation/native";

type Props = {
  route: RouteProp<{ params: { name: string } }, "params">;
};

function Device({ route }: Props) {
  const navigation = useNavigation();
  const { name } = route.params;

  const items = {
    plants: [
      {
        name: "Spider Plant",
        maximum_humidity: 75,
        minimum_humidity: 60,
        humidity: 75,
        watering: "Once a week",
        description:
          "A resilient and low-maintenance plant with arching leaves and small white flowers.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Chlorophytum_comosum0.jpg",
      },
      {
        name: "Snake Plant",
        maximum_humidity: 40,
        minimum_humidity: 30,
        humidity: 35,
        watering: "Every 2-3 weeks",
        description:
          "A striking plant with sword-like leaves that thrive in almost any lighting condition.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Sansevieria_trifasciata.jpg",
      },
      {
        name: "Peace Lily",
        maximum_humidity: 60,
        minimum_humidity: 40,
        humidity: 50,
        watering: "Once a week",
        description:
          "Known for its beautiful white flowers and air-purifying qualities.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Spathiphyllum_cochlearispathum_RTBG.jpg",
      },
      {
        name: "Monstera",
        maximum_humidity: 60,
        minimum_humidity: 55,
        humidity: 55,
        watering: "Every 1-2 weeks",
        description:
          "A trendy plant with large, uniquely split leaves that adds a tropical vibe.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Monstera_deliciosa.jpg",
      },
      {
        name: "Fiddle Leaf Fig",
        maximum_humidity: 50,
        minimum_humidity: 40,
        humidity: 48,
        description:
          "A popular indoor tree with large, glossy leaves that require a bit of care.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Ficus_lyrata_Fiddle_Leaf_Fig_Tree.jpg",
      },
      {
        name: "Boston Fern",
        maximum_humidity: 70,
        minimum_humidity: 65,
        humidity: 68,
        description:
          "A lush, green fern with feathery fronds that thrive in humid conditions.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Nephrolepis_exaltata.jpg",
      },
      {
        name: "Aloe Vera",
        maximum_humidity: 30,
        minimum_humidity: 10,
        humidity: 28,
        description:
          "A succulent known for its spiky leaves and soothing gel with medicinal properties.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/Aloe_vera.jpg",
      },
      {
        name: "Pothos",
        maximum_humidity: 40,
        minimum_humidity: 30,
        humidity: 38,
        description:
          "A hardy, fast-growing vine with heart-shaped leaves that purify the air.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e2/Epipremnum_aureum.jpg",
      },
    ],
    waterRemaining: 3 / 4,
  };

  const calculateHumidityPercentage = (
    max: number,
    min: number,
    current: number
  ) => {
    const range = max - min;
    if (range === 0) return 0;
    return ((current - min) / range) * 100;
  };

  return (
    <View style={tw`items-center h-full pt-1 bg-green-100`}>
      <View style={tw`flex-row items-center justify-between w-full pb-2`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`font-bold text-white`}>Back</Text>
        </Pressable>
        <Text style={tw`text-xl font-bold text-green-800`}>
          {name.replace("_", " ")}
        </Text>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 mr-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>Home</Text>
        </Pressable>
      </View>
      <ScrollView style={tw`w-full px-4`}>
        {items.plants.map((item, index) => (
          <View
            key={index}
            style={tw`flex-row items-center justify-between w-full mt-4 bg-red-500 border border-blue-500 rounded-xl`}
          >
            <Image
              style={tw`w-12 h-12 m-1 bg-green-600 rounded-lg`}
              source={{
                uri: item.image,
              }}
            ></Image>
            <View style={tw`w-4/6`}>
              <Text style={tw`font-bold`}>{item.name}</Text>
              <Text style={tw``} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
            <View style={tw`text-center`}>
              <Image
                style={tw`w-12 h-12 m-1  rounded-lg`}
                source={require("../images/drop.png")}
              />
              <Text style={tw`w-full text-center`}>
                {calculateHumidityPercentage(
                  item.maximum_humidity,
                  item.minimum_humidity,
                  item.humidity
                ).toFixed(2)}{" "}
                %
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Device;
