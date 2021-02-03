import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Header } from "react-native-elements";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
// import Header from "./components/Header";

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const renderScreen = () => {
    if (!userNumber && guessRounds === 0) {
      return <StartGameScreen setUserNumber={setUserNumber} />;
    }
    if (!userNumber && guessRounds > 0) {
      return <GameOverScreen setGuessRounds={setGuessRounds} />;
    }
    if (userNumber) {
      return (
        <GameScreen
          userChoice={userNumber}
          setUserNumber={setUserNumber}
          setGuessRounds={setGuessRounds}
        />
      );
    }
  };
  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.view}>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          containerStyle={{ marginTop: 20 }}
        />
        {renderScreen()}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});
