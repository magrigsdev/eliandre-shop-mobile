import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import SingupScreen from "../screens/signupScreen";
import RegisterScreen from "../screens/registerScreen";
import { Tabs } from "./tab";



const Stacks = createNativeStackNavigator()


const Stack = () => {
    return (
            <> 
                    <Stacks.Navigator 
                    initialRouteName="welcome"
                    screenOptions={{headerShown: false}}
                    >
                        <Stacks.Screen name="welcome" component={WelcomeScreen} 
                            options={{ title :"Bienvenue"}}
                        />
                        <Stacks.Screen name="signup" component={SingupScreen}
                        options={{ title :"connexion" }}
                        />
                        <Stacks.Screen name="register" component={RegisterScreen}
                        options={{ title :"Création d'un compte" }}
                        />
                        <Stacks.Screen name="tabs" component={Tabs}
                        options={{ title :"Accueil" }}
                        />
                    </Stacks.Navigator>
                              
                               
            </>    
    )
}
export default Stack