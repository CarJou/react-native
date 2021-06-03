import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const TitleText = (props) => (
  <Text style={{ ...styles.title }}>{props.children}</Text>
);
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
    fontSize: 22,
    marginBottom: 15,
    letterSpacing: 1,
  },
});
export default TitleText;
