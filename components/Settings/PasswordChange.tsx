import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, Pressable } from "react-native";
import tw from "twrnc";
import LabelInput from "./LabelInput";
import Foldable from "./Foldable";

function PasswordChange() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [user, setUser] = useState({
    password: "",
    newPassword: "",
    newPasswordSecond: "",
  });

  return (
    <Foldable
      title={t("SETTINGSSCREEN.PASSWORDCHANGE.FOLDABLE")}
      height={250}
      isFirstOpen={false}
    >
      <LabelInput
        label={t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORD")}
        placeholder={t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORDPLACEHOLDER")}
        value={user.password}
        stateUpdate={(newText) => setUser({ ...user, password: newText })}
        secureTextEntry
      />
      <LabelInput
        label={t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORD")}
        placeholder={t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDPLACEHOLDER")}
        value={user.newPassword}
        stateUpdate={(newText) => setUser({ ...user, newPassword: newText })}
        secureTextEntry
      />
      <LabelInput
        label={t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDSECOND")}
        placeholder={t(
          "SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDPLACEHOLDERSECOND"
        )}
        value={user.newPasswordSecond}
        stateUpdate={(newText) =>
          setUser({ ...user, newPasswordSecond: newText })
        }
        secureTextEntry
      />
      <Pressable
        style={tw`items-center justify-center h-10 bg-green-600 rounded-lg w-30`}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={tw`font-semibold text-white`}>
          {t("SETTINGSSCREEN.PASSWORDCHANGE.SAVE")}
        </Text>
      </Pressable>
    </Foldable>
  );
}

export default PasswordChange;
