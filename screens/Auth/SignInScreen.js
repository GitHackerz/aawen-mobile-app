import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Logo from "../../assets/images/Logo.png";
import {colors, size} from "../../assets/theme/theme.json";
import {AntDesign} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";

const SignInScreen = ({navigation}) => {
    function handleGetStarted() {
        navigation.navigate('Main');
    }

    function handleSignUp() {
        navigation.navigate('Signup');
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.headerTitles}>
                    <Text style={styles.headerTitle}>Welcome Back !</Text>
                    <Text style={styles.headerSubtitle}>Please sign in to continue</Text>
                </View>
            </View>
            <View style={{flexDirection: "column", gap: 10}}>
                <View style={styles.inputs}>
                    <View style={styles.input}>
                        <AntDesign name="mail" size={24} color="black"/>
                        <TextInput placeholder="Email" style={styles.inputText}
                                   placeholderTextColor={colors.lightgrey}></TextInput>
                    </View>
                    <View style={styles.input}>
                        <AntDesign name="lock" size={24} color="black"/>
                        <TextInput placeholder="Password" style={styles.inputText}
                                   placeholderTextColor={colors.lightgrey}></TextInput>
                    </View>
                </View>
                <Text style={{color: colors.secondary, alignSelf: "flex-end"}}>Forgot Password ?</Text>
            </View>
            <View style={{flexDirection: "column", justifyContent: "center", gap: 15}}>
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{fontFamily: "Montserrat_300Light"}}>Don’t have an account? <Text
                        style={{color: colors.primary}} onPress={handleSignUp}>Sign up</Text></Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>2023 © AAWEN MOBILE APP</Text>
            </View>
        </View>
    </SafeAreaView>
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 80,
        paddingHorizontal: 50,
        paddingBottom: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'column',
        gap: 20,
    },
    headerTitles: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
    },
    headerTitle: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: 'Montserrat_700Bold',
    },
    headerSubtitle: {
        fontSize: 15,
        color: colors.secondary,
        fontFamily: 'Montserrat_400Regular',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 15,
        shadowRadius: 10,
        shadowOpacity: 0.2,
    },
    inputs: {
        flexDirection: 'column',
        gap: 20,
    },
    input: {
        backgroundColor: colors.white,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,

    },
    inputIcon: {
        width: 20,
        height: 20,
    },
    inputText: {
        fontSize: size.sm,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 10,
        width: "80%",
        paddingVertical: 10,
        color: colors.black,
    },
    button: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 60,
        alignSelf: 'center',
        borderRadius: 30,
        gap: 30,

    },
    buttonText: {
        color: colors.white,
        fontSize: size.lg,
        fontFamily: 'Montserrat_700Bold',
    },
    footer: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: 50,
    },
    footerText: {
        fontSize: size.sm,
        color: colors.secondary,
    },
})