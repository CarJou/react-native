import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <TitleText> The game is over</TitleText>
        <Image
          resizeMode="contain"
          source={require("../assets/images/bomb.png")}
        />
        <Text style={styles.text}>
          Number of rounds:{" "}
          <Text style={styles.bold}>{props.roundsNumber}</Text>
        </Text>
        <Text style={styles.text}>
          Number was: <Text style={styles.bold}>{props.userNumber}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <MainButton onPress={props.onRestart}>New game</MainButton>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 35,
  },
  container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  text: {
    color: Colors.primary,
    margin: 3,
  },
  buttonContainer: {
    marginTop: 20,
    width: 150,
    maxWidth: "80%",
    alignItems: "center",
  },
  bold: {
    fontFamily: "open-sans-bold",
    fontSize: 17,
  },
});
export default GameOver;
