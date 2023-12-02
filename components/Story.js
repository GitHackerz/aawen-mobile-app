import {View, Image, Text, StyleSheet} from "react-native";

const Story = ({ name, image }) => {
    return (
        <View style={styles.story}>
            <Image source={image} style={{width: 50, height: 50, borderRadius: 50}}/>
            <Text style={{textAlign: "center"}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    }
})

export default Story;