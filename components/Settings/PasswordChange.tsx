import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Pressable,
  Text,
  Easing,
  TextInput,
  View,
} from "react-native";
import tw from "twrnc";

function PasswordChange() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [user, setUser] = useState({
    password: "",
    newPassword: "",
    newPasswordSecond: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const animationHeight = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animationHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
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
    outputRange: [0, 250],
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
    <View style={tw`items-center pt-4`}>
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
          {t("SETTINGSSCREEN.PASSWORDCHANGE.FOLDABLE")}
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
        <View style={tw`flex-row items-center mb-6`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORD")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) => setUser({ ...user, password: newText })}
            placeholder={t("SETTINGSSCREEN.PASSWORDCHANGE.PASSWORDPLACEHOLDER")}
            value={user.password}
            secureTextEntry
          />
        </View>
        <View style={tw`flex-row items-center mb-6`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORD")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) =>
              setUser({ ...user, newPassword: newText })
            }
            placeholder={t(
              "SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDPLACEHOLDER"
            )}
            value={user.newPassword}
            secureTextEntry
          />
        </View>
        <View style={tw`flex-row items-center mb-4`}>
          <Text style={tw`w-32 mr-2 text-right`}>
            {t("SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDSECOND")}:
          </Text>
          <TextInput
            style={tw`h-10 px-2 border border-gray-300 rounded-full w-60`}
            onChangeText={(newText) =>
              setUser({ ...user, newPasswordSecond: newText })
            }
            placeholder={t(
              "SETTINGSSCREEN.PASSWORDCHANGE.NEWPASSWORDPLACEHOLDERSECOND"
            )}
            value={user.newPasswordSecond}
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
            {t("SETTINGSSCREEN.PASSWORDCHANGE.SAVE")}
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default PasswordChange;
