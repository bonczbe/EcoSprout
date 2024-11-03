import {
  Button,
  Image,
  Linking,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { HomeScreenNavigationProp } from "../types/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Login({ navigation }: Props) {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const openWebPage = () => {
    Linking.openURL("https://github.com/bonczbe");
  };

  return (
    <View style={tw`items-center h-full pt-24 bg-green-100`}>
      <Text style={tw`mb-4 text-xl`}>{t("LOGINSCREEN.WELCOME")}</Text>
      <View style={tw`items-center pt-12`}>
        <View style={tw`flex-row items-center mb-6`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("LOGINSCREEN.USERNAME")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setUserName(newText)}
            placeholder={t("LOGINSCREEN.USERNAMEPLACEHOLDER")}
            value={userName}
          />
        </View>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("LOGINSCREEN.PASSWORD")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setPassword(newText)}
            placeholder={t("LOGINSCREEN.PASSWORDPLACEHOLDER")}
            secureTextEntry
            value={password}
          />
        </View>
        <Pressable
          style={tw`items-center justify-center h-10 mt-12 bg-green-600 rounded-lg w-30`}
          onPress={() => {
            navigation.navigate("Home");
            setUserName("");
            setPassword("");
          }}
        >
          <Text style={tw`font-semibold text-white`}>
            {t("LOGINSCREEN.LOGIN")}
          </Text>
        </Pressable>
      </View>
      <View style={tw`items-center justify-center w-full h-1/2`}>
        <Image
          source={require("../images/logo.jpg")}
          style={tw`w-32 h-32 rounded-lg`}
          resizeMode="contain"
        />
      </View>
      <Text>{t("LOGINSCREEN.CREATED_BY")}</Text>
      <TouchableOpacity onPress={openWebPage}>
        <Text style={tw`text-blue-500 underline`}>bonczbe</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
