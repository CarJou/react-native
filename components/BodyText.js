import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const BodyText = (props) => <Text style={styles.body}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
    color: Colors.bold,
  },
});
export default BodyText;
