import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, DemoScreen, PaywallScreen } from "./screens";
import { NavigationProps } from "./utils/interface";

const Stack = createNativeStackNavigator<NavigationProps>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }}
          name="Demo"
          component={DemoScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            presentation: "modal",
          }}
          name="Paywall"
          component={PaywallScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
