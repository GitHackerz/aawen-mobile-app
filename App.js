import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";
import {Text} from "react-native";
import {
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    useFonts
} from "@expo-google-fonts/montserrat";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {

    const Stack = createStackNavigator();
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
    });

    if (!fontsLoaded)
        return <Text>Loading ...</Text>;
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        initialRouteName: "Auth"
                    }}
                >
                    <Stack.Screen name="Auth" component={AuthStack}/>
                    <Stack.Screen name="Main" component={MainStack}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

