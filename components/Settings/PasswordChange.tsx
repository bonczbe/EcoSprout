import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, Pressable, View } from "react-native";
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

  const [errors, setErrors] = useState({
    newPasswordMismatch: false,
    requirements: {
      minLength: false,
      uppercase: false,
      lowercase: false,
      number: false,
    },
  });

  useEffect(() => {
    const newErrors = {
      newPasswordMismatch: user.newPassword !== user.newPasswordSecond,
      requirements: {
        minLength: user.newPassword.length > 7,
        uppercase: /[A-Z]/.test(user.newPassword),
        lowercase: /[a-z]/.test(user.newPassword),
        number: /[0-9]/.test(user.newPassword),
      },
    };
    setErrors(newErrors);
  }, [user.newPassword, user.newPasswordSecond]);

  return (
    <Foldable
      title={t("SETTINGSSCREEN.PASSWORDCHANGE.FOLDABLE")}
      height={370}
      isFirstOpen={false}
    >
      <LabelInput
        label={t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORD")}
        placeholder={t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORDPLACEHOLDER")}
        value={user.password}
        stateUpdate={(newText) => setUser({ ...user, password: newText })}
        secureTextEntry
      />
      {(!errors.requirements.minLength ||
        !errors.requirements.uppercase ||
        !errors.requirements.lowercase ||
        !errors.requirements.number) &&
        user.newPassword.length > 0 && (
          <View
            style={tw`p-2 mb-2 bg-red-100 border border-red-400 rounded-md `}
          >
            <Text style={tw`mb-1 text-xs text-red-500`}>
              {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.REQUIREMENTS_HEADER")}
            </Text>
            {!errors.requirements.minLength && (
              <Text style={tw`text-xs text-red-500`}>
                {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.MIN_LENGTH")}
              </Text>
            )}
            {!errors.requirements.uppercase && (
              <Text style={tw`text-xs text-red-500`}>
                {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.UPPERCASE")}
              </Text>
            )}
            {!errors.requirements.lowercase && (
              <Text style={tw`text-xs text-red-500`}>
                {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.LOWERCASE")}
              </Text>
            )}
            {!errors.requirements.number && (
              <Text style={tw`text-xs text-red-500`}>
                {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.NUMBER")}
              </Text>
            )}
          </View>
        )}
      <LabelInput
        label={t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORD")}
        placeholder={t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDPLACEHOLDER")}
        value={user.newPassword}
        stateUpdate={(newText) => setUser({ ...user, newPassword: newText })}
        secureTextEntry
        style={tw`h-10 px-2 border ${
          (!errors.requirements.minLength ||
            !errors.requirements.uppercase ||
            !errors.requirements.lowercase ||
            !errors.requirements.number) &&
          user.newPassword.length > 0
            ? "border-red-500"
            : "border-gray-300"
        } rounded-full w-60`}
      />
      {errors.newPasswordMismatch && user.newPasswordSecond.length > 0 && (
        <View style={tw`p-2 mb-2 bg-red-100 border border-red-400 rounded-md `}>
          <Text style={tw`mb-1 text-xs text-red-500`}>
            {t("SETTINGSSCREEN.PASSWORDCHANGE.ERRORS.MISMATCH")}
          </Text>
        </View>
      )}
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
        style={tw`h-10 px-2 border ${
          errors.newPasswordMismatch && user.newPasswordSecond.length > 0
            ? "border-red-500"
            : "border-gray-300"
        } rounded-full w-60`}
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
