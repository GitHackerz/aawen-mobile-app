import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GetStartedScreen from "../screens/Auth/GetStartedScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            initialRouteName: "GetStarted"
        }}>
            <Stack.Screen name="GetStarted" component={GetStartedScreen}/>
            <Stack.Screen name="Signin" component={SignInScreen}/>
            <Stack.Screen name="Signup" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

export default AuthStack;