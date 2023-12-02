import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Logo from "../../assets/images/Logo.png";
import {colors, size} from "../../assets/theme/theme.json";
import {AntDesign} from "@expo/vector-icons";

const GetStartedScreen = ({navigation}) => {
    const handleGetStarted = () => {
        navigation.navigate('Signin');
    }

    return <View style={styles.container}>
        <View style={styles.content}>
            <Image source={Logo} style={styles.logo}/>
            <View>
                <View style={{marginBottom: 25}}>
                    <Text style={styles.title1}>WELCOME TO</Text>
                    <Text style={styles.title2}>AAWEN APP</Text>
                </View>
                <Text style={styles.description}>
                    Join our mission to end poverty. Introducing our innovative mobile app connecting charitable souls and verified cases of those in need. Our platform ensures authenticity through rigorous vetting and on-site verifications. Together, let's create a world where poverty has no place.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get Started</Text>
                <AntDesign style={{right: 0}} name="right" size={24} color={colors.white}/>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>2023 © AAWEN MOBILE APP</Text>
        </View>
    </View>
}

export default GetStartedScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 50,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 40,
        marginVertical: 100
    },
    logo: {
        width: 275,
        height: 275,
        borderRadius: 45,
        alignSelf: 'center'
    },
    title1: {
        fontSize: size.xl,
        fontFamily: 'Montserrat_400Regular',
        color: colors.secondary
    },
    title2: {
        fontSize: 36,
        fontFamily: 'Montserrat_700Bold',
        color: colors.primary
    },
    description: {
        fontSize: size.sm,
        fontFamily: 'Montserrat_400Regular',
        color: colors.black,
        textAlign: 'justify'
    },
    button: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    footerText: {
        fontSize: size.sm,
        color: colors.secondary,
    },
})