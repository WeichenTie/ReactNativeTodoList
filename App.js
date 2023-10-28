import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CreateAndEditScreen from "./screens/CreateAndEditScreen";
import { useStore } from "./store";

const Stack = createStackNavigator();

export default function App() {
  const store = useStore();

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home">
            {(props) => <HomeScreen store={store} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Create">
            {(props) => <CreateAndEditScreen store={store} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Edit">
            {(props) => <CreateAndEditScreen store={store} {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
