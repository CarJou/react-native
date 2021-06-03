import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  text: {
    color: Colors.text,
    fontFamily: "open-sans",
    fontSize: 15,
  },
});
export default MainButton;
