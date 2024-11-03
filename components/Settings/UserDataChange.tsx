import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import i18next from "i18next";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Easing,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import tw from "twrnc";

function UserDataChange() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(true);
  const animationHeight = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });

  const selectedLanguage = i18next.language;

  useEffect(() => {
    Animated.timing(animationHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(rotation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(scale, {
      toValue: isOpen ? 1.1 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const animatedHeight = animationHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 375],
  });

  const animatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedScale = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  });

  return (
    <View style={tw`items-center w-full mt-12`}>
      <Pressable
        style={tw`flex-row items-center pb-4`}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Animated.View style={{ transform: [{ rotate: animatedRotation }] }}>
          <Ionicons name={"chevron-down-outline"} size={20} color="black" />
        </Animated.View>
        <Animated.Text
          style={[
            tw`px-4 text-xl font-bold`,
            { transform: [{ scale: animatedScale }] },
          ]}
        >
          {t("SETTINGSSCREEN.DATACHANGE.FOLDABLE")}
        </Animated.Text>
        <Animated.View style={{ transform: [{ rotate: animatedRotation }] }}>
          <Ionicons name={"chevron-down-outline"} size={20} color="black" />
        </Animated.View>
      </Pressable>

      <Animated.View
        style={[
          tw`items-center w-full overflow-hidden`,
          { height: animatedHeight },
        ]}
      >
        {selectedLanguage === "hu" ? (
          <View>
            <View style={tw`flex-row items-center mb-6`}>
              <Text style={tw`w-32 mr-2 text-right`}>
                {t("SETTINGSSCREEN.DATACHANGE.LASTNAME")}:
              </Text>
              <TextInput
                style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
                onChangeText={(newText) =>
                  setUser({ ...user, lastName: newText })
                }
                placeholder={t("SETTINGSSCREEN.DATACHANGE.LASTNAMEPLACEHOLDER")}
                value={user.lastName}
              />
            </View>
            <View style={tw`flex-row items-center mb-6`}>
              <Text style={tw`w-32 mr-2 text-right`}>
                {t("SETTINGSSCREEN.DATACHANGE.FIRSTNAME")}:
              </Text>
              <TextInput
                style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
                onChangeText={(newText) =>
                  setUser({ ...user, firstName: newText })
                }
                placeholder={t(
                  "SETTINGSSCREEN.DATACHANGE.FIRSTNAMEPLACEHOLDER"
                )}
                value={user.firstName}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={tw`flex-row items-center mb-6`}>
              <Text style={tw`w-32 mr-2 text-right`}>
                {t("SETTINGSSCREEN.DATACHANGE.FIRSTNAME")}:
              </Text>
              <TextInput
                style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
                onChangeText={(newText) =>
                  setUser({ ...user, firstName: newText })
                }
                placeholder={t(
                  "SETTINGSSCREEN.DATACHANGE.FIRSTNAMEPLACEHOLDER"
                )}
                value={user.firstName}
              />
            </View>
            <View style={tw`flex-row items-center mb-6`}>
              <Text style={tw`w-32 mr-2 text-right`}>
                {t("SETTINGSSCREEN.DATACHANGE.LASTNAME")}:
              </Text>
              <TextInput
                style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
                onChangeText={(newText) =>
                  setUser({ ...user, lastName: newText })
                }
                placeholder={t("SETTINGSSCREEN.DATACHANGE.LASTNAMEPLACEHOLDER")}
                value={user.lastName}
              />
            </View>
          </View>
        )}

        <View style={tw`flex-row items-center mb-6`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.DATACHANGE.USERNAME")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setUser({ ...user, userName: newText })}
            placeholder={t("SETTINGSSCREEN.DATACHANGE.USERNAMEPLACEHOLDER")}
            value={user.userName}
          />
        </View>

        <View style={tw`flex-row items-center mb-6`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.DATACHANGE.EMAIL")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setUser({ ...user, email: newText })}
            placeholder={t("SETTINGSSCREEN.DATACHANGE.EMAILPLACEHOLDER")}
            value={user.email}
          />
        </View>

        <View style={tw`flex-row items-center mb-4`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.DATACHANGE.PASSWORD")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setUser({ ...user, password: newText })}
            placeholder={t("SETTINGSSCREEN.DATACHANGE.PASSWORDPLACEHOLDER")}
            value={user.password}
            secureTextEntry
          />
        </View>

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
      </Animated.View>
    </View>
  );
}

export default UserDataChange;
