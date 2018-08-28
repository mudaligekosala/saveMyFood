import React from "react";
import { StyleSheet, View, TextInput, Text, Modal, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const timerAlert = ({
    onPress
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageView}>
        <TouchableOpacity onPress={onPress}>
          <EvilIcons name="close" size={20} color="gray"  />
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text
            style={{
              flex: 0.8,
              color: "red",
              fontWeight: "100",
              fontSize: 25
            }}
          >
            Batter Cake
          </Text>
          <Text
            style={{
              flex: 2,
              color: "red",
              fontWeight: "600",
              fontSize: 80
            }}
          >
            00:00
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "60%",
    position: "absolute"
  },
  subContainer: {
    flex: 1,
    height: "40%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  imageView: {
    height: 20,
    width: "100%",
    alignItems: "flex-end",
    padding: 2
  },
  details: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default timerAlert;
