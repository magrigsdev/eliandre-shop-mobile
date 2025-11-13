import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import ConnexionScreen from "../screens/connexionScreen";

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Connexion" component={ConnexionScreen}/>
        </Stack.Navigator>     
    )
}
export default StackNavigator