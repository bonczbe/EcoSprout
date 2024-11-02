import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface NavProps {
  name: string;
}

const Nav: React.FC<NavProps> = ({ name }) => {
  const { t } = useTranslation();
  const languages = [
    { key: "hu", value: "HU" },
    { key: "en", value: "EN" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        i18next.changeLanguage(storedLanguage);
        setSelectedLanguage(storedLanguage);
      }
    };

    loadLanguage();
  }, []);

  const changeLanguage = (langKey: string) => {
    const languageCode = langKey;
    i18next.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
    AsyncStorage.setItem("selectedLanguage", languageCode);
  };

  const defaultLanguage =
    languages.find((lang) => lang.key === selectedLanguage) || languages[0];

  return (
    <SafeAreaView style={tw`p-4 pt-12 bg-green-300`}>
      <View style={tw`flex-row items-center`}>
        <View style={tw`flex-initial w-18`}>
          <SelectList
            defaultOption={defaultLanguage}
            setSelected={changeLanguage}
            data={languages}
            save="key"
            placeholder={t("Select Language")}
            dropdownStyles={tw`p-0 py-0 bg-green-100`}
            boxStyles={tw`px-2 py-1 mx-2 my-0 bg-green-400 border border-gray-300 rounded-lg`}
            search={false}
          />
        </View>
        <Text
          style={tw`flex-initial w-64 text-xl font-bold tracking-wide text-center text-black`}
        >
          {name}
        </Text>
        <View style={tw`items-end flex-initial w-18`}>
          <Ionicons name="person-outline" size={30} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Nav;
