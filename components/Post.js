import {View, StyleSheet, Image, Text} from "react-native";
import {colors, size} from "../assets/theme/theme.json";
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import {useEffect, useState} from "react";

function calculateTimeDifference(postedDate) {
    // Convert the posted date string to a Date object
    const postedTime = new Date(postedDate);

    // Get the current date and time
    const currentTime = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - postedTime;

    // Calculate the time difference in seconds, minutes, hours, and days
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
    };
}


const Post = ({userName, userIcon, userJob, time, description, likes, comments, Post}) => {

    const [timeDifference, setTimeDifference] = useState({});
    const [liked, setLiked] = useState(false);
    const [postLikes, setPostLikes] = useState(likes);

    useEffect(() => {
        setTimeDifference(calculateTimeDifference(time));
    }, []);

    const handleLike = () =>{
        if(liked) {
            setPostLikes(postLikes - 1);
        }
        else {
            setPostLikes(postLikes + 1);
        }
        setLiked(!liked);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <Image source={userIcon} style={styles.userIcon}/>
                    <View style={styles.user}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Text style={styles.userJob}>{userJob}</Text>
                    </View>
                </View>
                <View>
                    <Text
                        style={styles.time}>{timeDifference.days ? timeDifference.days + " Days" : timeDifference.hours ? timeDifference.hours + " Hours" : timeDifference.minutes ? timeDifference.minutes + " Min" : timeDifference.seconds + " Sec"} ago</Text>
                </View>
            </View>
            <View style={styles.postBody}>
                <Image source={Post} style={styles.postImg}/>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <View style={styles.footerItem}>
                        {liked ?
                            <AntDesign name="heart" size={20} color="red" onPress={handleLike}/> :
                            <AntDesign name="hearto" size={20} color="black" onPress={handleLike}/>
                        }
                        <Text style={styles.footerText}>{postLikes} Likes</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <FontAwesome5 name="comment-dots" size={20} color="black"/>
                        <Text style={styles.footerText}>{comments} Comments</Text>
                    </View>
                </View>
                <View style={styles.footerRight}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                        backgroundColor: colors.secondary,
                        paddingHorizontal: 15,
                        paddingVertical: 8,
                        borderRadius: 10,
                    }}>
                        <FontAwesome5 name="donate" size={15} color="white" />
                        <Text style={{
                            color: colors.white,
                        }}>Donate</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
        width: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    userIcon: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    user: {
        flexDirection: "column",
        gap: 5,
        marginRight: 15,
    },
    userName: {
        fontSize: 14,
        fontFamily: "Montserrat_700Bold",
        color: colors.black,
    },
    userJob: {
        fontSize: 14,
        fontFamily: "Montserrat_400Regular",
        color: colors.black,
    },
    time: {
        fontSize: 10,
        fontFamily: "Montserrat_300Light",
        color: colors.grey,
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: "Montserrat_400Regular",
        color: colors.black,
        textAlign: "justify",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    footerText: {
        fontSize: 10,
        fontFamily: "Montserrat_300Light",
        color: colors.grey,
    },
    footerItem: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    footerLeft: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
    },
    footerRight: {},
    postImg: {
        // width: "100%",
        height: 200,
        width: 300,
        borderRadius: 15,
    },
    postBody: {
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
    }

})

export default Post