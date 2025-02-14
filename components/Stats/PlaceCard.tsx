
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

type PlantData = {
    usage: number;
  };

type Place = {
    name: string;
    plants: Record<string, PlantData>;
    usage: number;
    remaining: number;
  };

type PlaceCardProps = {
    place: Place;
    onPress: () => void;
  }

const PlaceCard = ({ place, onPress }: PlaceCardProps) => {
    const { t } = useTranslation();
    return (
      <Pressable style={tw`mb-4 bg-green-100 rounded-lg p-4 shadow-lg`} onPress={onPress}>
        <Text style={tw`text-lg font-semibold text-green-700`}>{place.name}</Text>
        <Text style={tw`text-sm text-green-600`}>{t("STATSSCREEN.PLANTS")}:</Text>
        {Object.entries(place.plants).map(([plant, plantData]) => (
          <Text key={plant} style={tw`text-sm text-green-500 pl-2`}>
            {plant.replace("_", " ")}: {plantData.usage}L
          </Text>
        ))}
        <Text style={tw`text-sm text-green-600`}>
            {place.usage} L / {place.remaining} L
        </Text>
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
      </Pressable>
    );
  };
  export default PlaceCard;