import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CompleteBanner = ({
    onPress,
    time,
    foodName,
}) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          numberOfLines={2}
          style={styles.text}>
          `${time} Min Done.Your &{foodName} is rady to eat`
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "40%",
        backgroundColor: "green",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
      },
      text:{
        textAlign: "center",
        color: "#fff",
        fontSize: 30,
        fontWeight: "100"
      }
})

export default CompleteBanner;
