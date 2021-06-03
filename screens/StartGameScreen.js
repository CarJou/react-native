import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  //botones
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    //verificar si el num elegido no es un num que es un valor predeterminado de js
    //si todavia no es un num o si el num es menor o igual a 0
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    //hay que establecer el valor introductorio y tambien guardar el valor
    setEnteredValue("");
    Keyboard.dismiss();
    setSelectedNumber(parseInt(enteredValue));
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start game
        </MainButton>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Card style={styles.inputContainer}>
              <TitleText style={styles.title}>Start a new game!</TitleText>
              <BodyText>Select a number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Colors.accent}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 35,
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: 400,
    maxWidth: "90%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
  },
  button: {
    width: Dimensions.get("window").width / 4,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
