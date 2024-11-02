import { Button, View } from "react-native";
import tw from "twrnc";
import { HomeScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: Props) {
  return (
    <View>
      <Button title="Rooms" onPress={() => navigation.navigate("Rooms")} />
    </View>
  );
}

export default Home;
