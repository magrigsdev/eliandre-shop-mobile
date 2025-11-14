import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import ConnexionScreen from "../screens/connexionScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Connexion" component={ConnexionScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator> 
        </NavigationContainer>    
    )
}
export default StackNavigator