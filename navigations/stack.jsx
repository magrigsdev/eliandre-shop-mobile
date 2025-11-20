
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SingupScreen from "../screens/signupScreen";
import RegisterScreen from "../screens/registerScreen";

const Stacks = createNativeStackNavigator()


const Stack = () => {
    return (
        <NavigationContainer>
            <Stacks.Navigator initialRouteName="welcome">
                <Stacks.Screen name="welcome" component={WelcomeScreen} 
                    options={{ title :"Bienvenue"}}
                />
                <Stacks.Screen name="signup" component={SingupScreen}
                options={{ title :"connexion" }}
                />
                <Stacks.Screen name="register" component={RegisterScreen}
                options={{ title :"Création d'un compte" }}
                />
            </Stacks.Navigator> 
        </NavigationContainer>    
    )
}
export default Stack