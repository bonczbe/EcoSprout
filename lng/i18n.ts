import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hu from "./hu.json";

const resources = {
  en: en,
  hu: hu,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
});

export default { i18n };
//https://medium.com/@lasithherath00/implementing-react-native-i18n-and-language-selection-with-asyncstorage-b24ae59e788e
