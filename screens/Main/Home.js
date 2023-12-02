import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {colors} from "../../assets/theme/theme.json";
import User from "../../assets/images/user.jpg";
import User1 from "../../assets/images/user1.jpg";
import User2 from "../../assets/images/user2.jpg";
import User3 from "../../assets/images/user3.jpg";
import User4 from "../../assets/images/user4.jpg";
import Story from "../../components/Story";
import Post from "../../components/Post";
import PostImg1 from "../../assets/images/post1.jpg";
import PostImg2 from "../../assets/images/post2.jpg";
import PostImg3 from "../../assets/images/post3.jpg";


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={"light"} backgroundColor={"black"}/>
            <View style={styles.header}>
                <View style={styles.topHeader}>
                    <Feather name="camera" size={24} color="black"/>
                    <Text style={styles.headerText}>AAWEN APP</Text>
                    <Feather name="send" size={24} color="black"/>
                </View>
                <ScrollView horizontal={true} style={styles.stories} showsHorizontalScrollIndicator={false}>
                    <Story name={"User 1"} image={User}/>
                    <Story name={"User 1"} image={User1}/>
                    <Story name={"User 1"} image={User2}/>
                    <Story name={"User 1"} image={User3}/>
                    <Story name={"User 1"} image={User4}/>
                    <Story name={"User 1"} image={User}/>
                    <Story name={"User 1"} image={User1}/>
                    <Story name={"User 1"} image={User2}/>
                    <Story name={"User 1"} image={User3}/>
                    <Story name={"User 1"} image={User4}/>
                    <Story name={"User 1"} image={User}/>
                </ScrollView>
            </View>
            <ScrollView style={{width: "90%", marginVertical: 20}} contentContainerStyle={styles.posts}
                        showsVerticalScrollIndicator={false}>
                <Post userName={"John Doe"} userIcon={User} userJob={"Association - Ariana"} comments={5}
                      time="2023-11-20T20:48:00Z"
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed placerat turpis. Quisque at placerat dui. Phasellus vitae vehicula ex, vitae ornare erat. Nulla est arcu, mollis at nisl aliquam, dapibus lobortis lorem. Phasellus eget quam in ante luctus auctor quis sit amet ante. Nullam sed ipsum nec leo dapibus volutpat. Vestibulum nec orci sed nisi mollis tempor."}
                      likes={30} Post={PostImg1}/>
                <Post userName={"James Bean"} userIcon={User1} userJob={"Member"} comments={30}
                      time="2023-11-16T10:40:00Z"
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed placerat turpis. Quisque at placerat dui. Phasellus vitae vehicula ex, vitae ornare erat. Nulla est arcu, mollis at nisl aliquam, dapibus lobortis lorem. Phasellus eget quam in ante luctus auctor quis sit amet ante. Nullam sed ipsum nec leo dapibus volutpat. Vestibulum nec orci sed nisi mollis tempor."}
                      likes={10} Post={PostImg2}/>
                <Post userName={"Brown Dee"} userIcon={User} userJob={"Association - Ben Arous"} comments={50}
                      time="2023-11-15T10:48:00Z"
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed placerat turpis. Quisque at placerat dui. Phasellus vitae vehicula ex, vitae ornare erat. Nulla est arcu, mollis at nisl aliquam, dapibus lobortis lorem. Phasellus eget quam in ante luctus auctor quis sit amet ante. Nullam sed ipsum nec leo dapibus volutpat. Vestibulum nec orci sed nisi mollis tempor."}
                      likes={40} Post={PostImg3}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#E9E9E9",
        alignItems: "center",
    },
    header: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 15,
        paddingHorizontal: 20,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: "center",
    },
    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    headerText: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
        color: colors.primary,
    },
    stories: {
        marginVertical: 20
    },
    story: {
        flexDirection: "column",
        gap: 5,
        marginRight: 15,
    },
    posts: {
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
    }
})

export default Home;