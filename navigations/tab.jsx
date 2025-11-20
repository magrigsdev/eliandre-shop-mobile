import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "../screens/homeScreen"
import Category from "../screens/categoryScreen"
import Stack from "./stack"
import CategoryScreen from "../screens/categoryScreen"
import PanierScreen from "../screens/panierScreen"
import ProfilScreen from "../screens/profilScreen"


const Tab =  createBottomTabNavigator()

export const Tabs = () => {

    return (<>
            <Tab.Navigator
            initialRouteName="home"
             
            screenOptions={
                ({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor:'teal',
                tabBarIcon : ({ size, color}) => {
                    let iconName;
                    if(route.name === 'home'){
                        iconName = 'home'
                    }
                    else if (route.name == 'category'){
                        iconName = 'grid'
                    }
                    else if (route.name == 'panier'){
                        iconName = 'basket'
                    }
                    else if (route.name == 'profil'){
                        iconName = 'person'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })} 
            >
                <Tab.Screen name="home" component={HomeScreen} />
                <Tab.Screen name="category" component={CategoryScreen} />
                <Tab.Screen name="panier" component={PanierScreen} />
                <Tab.Screen name="profil" component={ProfilScreen} />
                 
            </Tab.Navigator>
    </>)
}