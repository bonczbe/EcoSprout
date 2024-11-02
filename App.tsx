import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Rooms from "./screens/Rooms";
import { RootStackParamList } from "./types/navigation";
import Nav from "./components/Nav";
import Outside from "./screens/Outside";
import Device from "./screens/Device";
import Plant from "./screens/Plant";
import Stats from "./screens/Stats";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <Nav name="Home" /> }}
        />
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{ header: () => <Nav name="Rooms" /> }}
        />
        <Stack.Screen
          name="Outside"
          component={Outside}
          options={{ header: () => <Nav name="Rooms" /> }}
        />
        <Stack.Screen
          name="Device"
          component={Device}
          options={{ header: () => <Nav name="Rooms" /> }}
        />
        <Stack.Screen
          name="Plant"
          component={Plant}
          options={{ header: () => <Nav name="Rooms" /> }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{ header: () => <Nav name="Rooms" /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
