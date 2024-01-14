import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import BootcampDetails from "./src/screens/BootcampDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="BootcampDetails"
          component={BootcampDetails}
          options={{
            headerShown: true,
            animation: "none",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
