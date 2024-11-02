import { Button, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: RoomsScreenNavigationProp;
};

function Rooms({ navigation }: Props) {
  return (
    <View>
      <Button title="Rooms" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Rooms;
