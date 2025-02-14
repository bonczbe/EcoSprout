import { Pressable, ScrollView, Text } from "react-native";
import tw from "twrnc";
import { RoomsScreenNavigationProp } from "../types/navigation";
import UserDataChange from "../components/Settings/UserDataChange";
import PasswordChange from "../components/Settings/PasswordChange";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: RoomsScreenNavigationProp;
};

function Settings({ navigation }: Props) {
  const { t } = useTranslation();
  return (
    <ScrollView
      style={tw`h-full bg-green-100`}
      contentContainerStyle={tw`items-center`}
    >
      <UserDataChange />
      <PasswordChange />
      <Pressable
        style={tw`items-center justify-center h-10 mt-4 mb-12 bg-green-600 rounded-lg w-30`}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={tw`font-semibold text-white`}>
          {t("COMMON.BACK")}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

export default Settings;
