import { Button, View } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";

type Props = {
  navigation: RoomsScreenNavigationProp;
};

function Outside({ navigation }: Props) {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Outside;
