import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import tw from "twrnc";
import PlaceCard from "./PlaceCard";

type PlantData = {
  usage: number;
};

type Place = {
  name: string;
  plants: Record<string, PlantData>;
  usage: number;
  remaining: number;
};

type Props = {
  title: string;
  location: string;
  places: Place[];
  navigation: any;
};

const PlacesStats = ({ title, places, navigation, location }: Props) => {
  const { t } = useTranslation();
  
  

  return (
    <View>
      <Text style={tw`text-xl font-semibold text-green-600 mb-2 mt-4`}>{title}</Text>
      {places.map((place, index) => (
        <PlaceCard
          key={index}
          place={place}
          onPress={() =>
            navigation.navigate("Device", {
              name: location.replace(" ", "_"),
            })
          }
        />
      ))}
    </View>
  );
};

export default PlacesStats;
