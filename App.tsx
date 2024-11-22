import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { RootStackParamList } from "./types/navigation";
import Nav from "./components/Nav";
import Plant from "./screens/Plant";
import Stats from "./screens/Stats";
import Login from "./screens/Login";
import "./lng/i18n";
import { useTranslation } from "react-i18next";
import Settings from "./screens/Settings";
import { Provider } from "react-redux";
import store from "./store/store";
import Devices from "./screens/Devices";
import Device from "./screens/Device";

export default function App() {
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
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
            name="Devices"
            component={Devices}
            options={({ navigation }) => ({
              header: () => (
                <Nav name={t("DEVICESCREEN.TITLE")} navigation={navigation} />
              ),
            })}
          />
          <Stack.Screen
            name="Device"
            component={Device}
            options={({ navigation }) => ({
              header: () => (
                <Nav name={t("DEVICECREEN.TITLE")} navigation={navigation} />
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
    </Provider>
  );
}
