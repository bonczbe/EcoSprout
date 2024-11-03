import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Rooms from "./screens/Rooms";
import { RootStackParamList } from "./types/navigation";
import Nav from "./components/Nav";
import Device from "./screens/Device";
import Plant from "./screens/Plant";
import Stats from "./screens/Stats";
import Login from "./screens/Login";
import "./lng/i18n";
import { useTranslation } from "react-i18next";
import Outdoor from "./screens/Outdoor";
import Settings from "./screens/Settings";

export default function App() {
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("LOGINSCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("HOMESCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("ROOMSSCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Outdoor"
          component={Outdoor}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("OUTDOOR.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Device"
          component={Device}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("DEVICESCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Plant"
          component={Plant}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("PLANTSCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("STATSSCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => ({
            header: () => (
              <Nav name={t("SETTINGSSCREEN.TITLE")} navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
