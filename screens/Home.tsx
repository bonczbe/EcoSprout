import { Button, Text, View } from "react-native";
import tw from "twrnc";
import { HomeScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: Props) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Text>House from modal choose</Text>
      <Text>Indoor</Text>
      <Text>OutDoor</Text>
      <Text>Stats</Text>
    </View>
  );
}

export default Home;
