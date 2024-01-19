import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/WelcomeScreen";
import Signup from "./src/screens/SignupScreen";
import Login from "./src/screens/LoginScreen";
import Home from "./src/screens/HomeScreen";
import BootcampDetails from "./src/screens/BootcampDetailsScreen";
import AddBootcampScreen from "./src/screens/BootcampAddScreen";
import BootcampEditScreen from "./src/screens/BootcampEditScreen";

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
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="AddBootcampScreen"
          component={AddBootcampScreen}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="BootcampEditScreen"
          component={BootcampEditScreen}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
