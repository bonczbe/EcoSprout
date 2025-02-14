import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  route: RouteProp<{ params: { name: string } }, "params">;
};

function Device({ route }: Props) {
  const navigation = useNavigation();
  const { name } = route.params;
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    fromPlant: 0,
  });

  type PlantType = "tropical" | "cactiSucculents";

  interface Plant {
    id: number;
    name: string;
    plantType: PlantType;
    humidity: number;
    watering: string;
    description: string;
    image: string;
  }

  interface HumidityRanges {
    tropical: { min: number; max: number };
    cactiSucculents: { min: number; max: number };
  }

  const humidityRanges: HumidityRanges = {
    cactiSucculents: {
      min: 20,
      max: 50,
    },
    tropical: {
      min: 50,
      max: 80,
    },
  };

  const items: { plants: Plant[]; waterRemaining: number } = {
    plants: [
      {
        id: 1,
        name: "Spider Plant",
        plantType: "tropical",
        humidity: 75,
        watering: "Once a week",
        description:
          "A resilient and low-maintenance plant with arching leaves and small white flowers.",
        image:
          "https://www.flowerstation.co.uk/cdn/shop/files/spider-plant-res-brown__30216.1691515154.800.800.jpg?v=1720103432&width=416",
      },
      {
        id: 2,
        name: "Snake Plant",
        plantType: "cactiSucculents",
        humidity: 35,
        watering: "Every 2-3 weeks",
        description:
          "A striking plant with sword-like leaves that thrive in almost any lighting condition.",
        image:
          "https://preview.redd.it/how-much-light-do-snake-plant-need-more-in-the-body-text-v0-iov24b1qxeuc1.jpeg?width=640&crop=smart&auto=webp&s=a07fbb4fedfa8e23f0b01d83704f78b2caf11702",
      },
      {
        id: 3,
        name: "Peace Lily",
        plantType: "tropical",
        humidity: 50,
        watering: "Once a week",
        description:
          "Known for its beautiful white flowers and air-purifying qualities.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Spathiphyllum_cochlearispathum_RTBG.jpg",
      },
      {
        id: 4,
        name: "Monstera",
        plantType: "tropical",
        humidity: 55,
        watering: "Every 1-2 weeks",
        description:
          "A trendy plant with large, uniquely split leaves that adds a tropical vibe.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Monstera_deliciosa.jpg",
      },
      {
        id: 5,
        name: "Fiddle Leaf Fig",
        plantType: "tropical",
        humidity: 48,
        watering: "Once a week",
        description:
          "A popular indoor tree with large, glossy leaves that require a bit of care.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Ficus_lyrata_Fiddle_Leaf_Fig_Tree.jpg",
      },
      {
        id: 6,
        name: "Boston Fern",
        plantType: "tropical",
        humidity: 68,
        watering: "Every week",
        description:
          "A lush, green fern with feathery fronds that thrive in humid conditions.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Nephrolepis_exaltata.jpg",
      },
      {
        id: 7,
        name: "Aloe Vera",
        plantType: "cactiSucculents",
        humidity: 28,
        watering: "Once every 2-3 weeks",
        description:
          "A succulent known for its spiky leaves and soothing gel with medicinal properties.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/Aloe_vera.jpg",
      },
      {
        id: 8,
        name: "Pothos",
        plantType: "tropical",
        humidity: 38,
        watering: "Once a week",
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

  const calculateDropStyle = (
    max: number,
    min: number,
    current: number
  ) => {
    let percentage = calculateHumidityPercentage( max, min, current ).toFixed(2);
    if(percentage<0){
      return require("../images/drop_red_styled.png");
    }else if(percentage<10){
      return require("../images/drop_yellow_styled.png");
    }else{
      return require("../images/drop.png");
    }
  };
  
  const { t } = useTranslation();

  return (
    <View style={tw`items-center h-full pt-1 bg-green-100 w-full`}>
      <View style={tw`flex-row items-center justify-between w-full pb-2`}>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 ml-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`font-bold text-white`}>{t("COMMON.BACK")}</Text>
        </Pressable>
        <Text style={tw`text-xl font-bold text-green-800`}>
          {name.replace("_", " ")}
        </Text>
        <Pressable
          style={tw`items-center justify-center w-20 h-10 mr-1 bg-green-600 rounded-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`font-bold text-white`}>{t("COMMON.HOME")}</Text>
        </Pressable>
      </View>
      <ScrollView style={tw`w-full px-4`}>
        {items.plants.map((item, index) => (
          <Pressable
            onPress={() =>
              setModalVisible({ visible: true, fromPlant: item.id })
            }
            key={index}
            style={tw`flex-row items-center justify-between w-full mt-4  bg-green-300 rounded-xl shadow-md px-1`}
          >
            <Image
              style={tw`w-12 h-12 m-1 bg-green-600 rounded-lg`}
              source={{
                uri: item.image,
              }}
            ></Image>
            <View style={tw`w-7/12`}>
              <Text style={tw`font-bold`}>{item.name}</Text>
              <Text style={tw``} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
            <View style={tw`text-center w-3/12`}>
              <Text numberOfLines={3} style={tw`w-full text-center`}>
              {t("DEVICECREEN.UNTIL_MIN_MOITURE")}
              </Text>
              <Image
                style={tw`w-12 h-12 m-1 bg-green-200 rounded-lg mx-auto`}
                source={calculateDropStyle(
                  humidityRanges[item.plantType].max,
                  humidityRanges[item.plantType].min,
                  item.humidity)}
              />
              <Text numberOfLines={2} style={tw`w-full text-center`}>
                {calculateHumidityPercentage(
                  humidityRanges[item.plantType].max,
                  humidityRanges[item.plantType].min,
                  item.humidity
                ).toFixed(2)}{" "}
                %
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible.visible}
        onRequestClose={() => {}}
      >
        <Pressable
          onPress={() => {
            setModalVisible({ visible: false, fromPlant: 0 });
          }}
          style={tw`flex-1 justify-center items-center bg-green-900 bg-opacity-40`}
        >
          <View style={tw`w-11/12 bg-green-200 rounded-xl shadow-lg p-4`}>
            <Text style={tw`text-xl font-bold text-green-800 mb-2`}>
              {
                items.plants.find(
                  (plant) => plant.id === modalVisible.fromPlant
                )?.name
              }
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

export default Device;
