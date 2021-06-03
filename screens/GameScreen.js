import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "Cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds((curRounds) => curRounds + 1);
    setPastGuesses((curPartGuesses) => [nextNumber, ...curPartGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <TitleText>Opponent's guess</TitleText>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={20} />
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={20} />
          </MainButton>
        </View>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, index) => (
            <View style={styles.listItem}>
              <BodyText>#{pastGuesses.length - index}</BodyText>
              <BodyText>Number: {guess}</BodyText>
            </View>
          ))}
        </ScrollView>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
  list: {
    width: Dimensions.get("window").width > 350 ? "60%" : "80%",
    flex: 1,
  },
  listItem: {
    borderColor: "white",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation: 8,
    borderRadius: 2,
  },
});
export default GameScreen;
