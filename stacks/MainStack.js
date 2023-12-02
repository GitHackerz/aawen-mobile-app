import Home from "../screens/Main/Home";
import Profile from "../screens/Main/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign} from "@expo/vector-icons";
import {colors} from "../assets/theme/theme.json";

const MainStack = () =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="home" size={size} color={color}/>
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="user" size={size} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default MainStack;