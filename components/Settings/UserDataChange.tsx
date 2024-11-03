import { useNavigation } from "@react-navigation/native";
import i18next from "i18next";
import { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { useTranslation } from "react-i18next";
import tw from "twrnc";
import LabelInput from "./LabelInput";
import Foldable from "./Foldable";

function UserDataChange() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });

  const selectedLanguage = i18next.language;

  return (
    <View style={tw`items-center w-full mt-12`}>
      <Foldable
        title={t("SETTINGSSCREEN.DATACHANGE.FOLDABLE")}
        height={375}
        isFirstOpen={true}
      >
        {selectedLanguage === "hu" ? (
          <View>
            <LabelInput
              label={t("SETTINGSSCREEN.DATACHANGE.LASTNAME")}
              placeholder={t("SETTINGSSCREEN.DATACHANGE.LASTNAMEPLACEHOLDER")}
              value={user.lastName}
              stateUpdate={(newText) => setUser({ ...user, lastName: newText })}
            />
            <LabelInput
              label={t("SETTINGSSCREEN.DATACHANGE.FIRSTNAME")}
              placeholder={t("SETTINGSSCREEN.DATACHANGE.FIRSTNAMEPLACEHOLDER")}
              value={user.firstName}
              stateUpdate={(newText) =>
                setUser({ ...user, firstName: newText })
              }
            />
          </View>
        ) : (
          <View>
            <LabelInput
              label={t("SETTINGSSCREEN.DATACHANGE.FIRSTNAME")}
              placeholder={t("SETTINGSSCREEN.DATACHANGE.FIRSTNAMEPLACEHOLDER")}
              value={user.firstName}
              stateUpdate={(newText) =>
                setUser({ ...user, firstName: newText })
              }
            />
            <LabelInput
              label={t("SETTINGSSCREEN.DATACHANGE.LASTNAME")}
              placeholder={t("SETTINGSSCREEN.DATACHANGE.LASTNAMEPLACEHOLDER")}
              value={user.lastName}
              stateUpdate={(newText) => setUser({ ...user, lastName: newText })}
            />
          </View>
        )}
        <LabelInput
          label={t("SETTINGSSCREEN.DATACHANGE.USERNAME")}
          placeholder={t("SETTINGSSCREEN.DATACHANGE.USERNAMEPLACEHOLDER")}
          value={user.userName}
          stateUpdate={(newText) => setUser({ ...user, userName: newText })}
        />
        <LabelInput
          label={t("SETTINGSSCREEN.DATACHANGE.EMAIL")}
          placeholder={t("SETTINGSSCREEN.DATACHANGE.EMAILPLACEHOLDER")}
          value={user.email}
          stateUpdate={(newText) => setUser({ ...user, email: newText })}
        />
        <LabelInput
          label={t("SETTINGSSCREEN.DATACHANGE.PASSWORD")}
          placeholder={t("SETTINGSSCREEN.DATACHANGE.PASSWORDPLACEHOLDER")}
          value={user.password}
          stateUpdate={(newText) => setUser({ ...user, password: newText })}
          secureTextEntry
        />

        <Pressable
          style={tw`items-center justify-center h-10 bg-green-600 rounded-lg w-30`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={tw`font-semibold text-white`}>
            {t("SETTINGSSCREEN.DATACHANGE.SAVE")}
          </Text>
        </Pressable>
      </Foldable>
    </View>
  );
}

export default UserDataChange;
