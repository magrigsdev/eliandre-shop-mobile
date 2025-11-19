
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SingupScreen from "../screens/signupScreen";

const Stacks = createNativeStackNavigator()


const Stack = () => {
    return (
        <NavigationContainer>
            <Stacks.Navigator initialRouteName="welcome">
                <Stacks.Screen name="welcome" component={WelcomeScreen} 
                    
                />
                <Stacks.Screen name="signup" component={SingupScreen}
                />
            </Stacks.Navigator> 
        </NavigationContainer>    
    )
}
export default Stack