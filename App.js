import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { UserScreen } from "./screens/UserScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
