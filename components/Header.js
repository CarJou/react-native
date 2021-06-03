import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 95,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
    color: Colors.text,
    fontSize: 18,
    marginVertical: 20,
  },
});

export default Header;
